import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react"
import axios from "axios";

import TodoList from './components/TodoList';

const baseURL = "https://todo-basic-api.up.railway.app/";

function App() {
  const [todo, setTodo] = useState(null);
  const [isTodoNull, setIsTodoNull] = useState(false);

  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(baseURL + 'todos/todo', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  }


  useEffect(() => {
    const fetchDataTodo = async () => {
        await axios.get(baseURL + "todos")
            .then((response) => {
              console.log(response);
              setTodo(response.data);
            })
            .catch((error) => {
              console.log(error);
              setIsTodoNull(true);
            });
    };
    fetchDataTodo();
  }, []);

  // if (!todo) return null;

  return (
    <>
      <div className="min-w-full min-h-[100vh] bg-primary m-0 flex justify-center items-center">
        <div className="todolist min-w-[280px] md:max-w-[500px]">
          <form onSubmit={handleSubmit}>
            {/* input item */}
            <div className="input-wrapper flex">
              <div className="input mr-3">
                <input 
                  type="text" 
                  id="input" 
                  className="bg-white rounded-lg h-[40px] min-w-[220px] md:w-[400px] focus:ring-primary-400 p-2" autocomplete="off" placeholder="Type your list..." 
                  onChange={e => setData({...data, description: e.target.value})}
                  />
              </div>
              <div className="button-submit">
                <button type="submit" className="inline-flex items-center justify-center bg-white text-primary font-semibold rounded-lg min-h-full px-[18px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#576fd9" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"/></svg>
                  Add
                </button>
              </div>
            </div>
          </form>

          <TodoList isTodoNull={isTodoNull} todo={todo} />
          
        </div>
      </div>
    </>
  );
}

export default App;
