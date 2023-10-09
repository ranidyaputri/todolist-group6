
const baseURL = "https://todo-basic-api.up.railway.app/";

export default function TodoList({ isTodoNull, todo }) {
  const onDelete = async (id) => {
    console.log(id);
    const response = await fetch(baseURL + 'todos/todo/'+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  }

  const onCompleted = async (id) => {
    console.log(id);
    const response = await fetch(baseURL + 'todos/todo/'+id, {
      method: 'PATCH',
      body: JSON.stringify({
        "completed": true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  }

   return (
     <>
      <div className="todo-wrapper mt-6 bg-white rounded-xl min-h-[400px] min-w-full p-5">
        <div className="todo-header mb-4">
          <h3 className="date-info text-black font-semibold">Todo List</h3>
          {/* <small className="text-primary-400 font-semibold">3 Tasks</small> */}
        </div>
        <div className="todo-body h-[300px] overflow-y-auto">
        {
          !isTodoNull ? 
          todo?.map((data, index) => {
          return (
              <>
                <div className="todo-item bg-white rounded-lg w-full min-h-[30px] inline-flex justify-between items-center hover:bg-gray p-3 mb-px group">
                  <div className="inline-flex items-center">
                    <button type="button" onClick={() => onCompleted(data.id)}>
                      <svg className="stroke-primary-400 mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="none" stroke-width="4"/></svg>
                    </button>
                    <span className=" text-sm">{data.description}</span>
                  </div>

                  <button type="button" className="stroke-black-400 group-hover:stroke-primary-400" onClick={() => onDelete(data.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6Zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853ZM2 6h20m-12 5v5m4-5v5"/></svg>
                  </button>
                </div>
                
              </>
          )}) :
          <div>Belum ada Todo</div>
        }
        </div>
          
      </div>
     </>
   )
 }
 