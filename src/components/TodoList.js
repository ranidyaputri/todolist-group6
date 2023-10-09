export default function TodoList({ isTodoNull, todo }) {
   return (
     <>
      <div className="todo-wrapper mt-6 bg-white rounded-xl min-h-[400px] min-w-full p-5">
        <div className="todo-header mb-4">
          <h3 className="date-info text-black font-semibold">Monday, 09 Oct 2023</h3>
          <small className="text-primary-400 font-semibold">3 Tasks</small>
        </div>
        <div className="todo-body h-[300px] overflow-y-auto">
        {
          !isTodoNull ? 
          todo?.map((data, index) => {
          return (
            
              <div className="todo-item bg-white rounded-lg w-full min-h-[30px] inline-flex items-center hover:bg-gray hover:cursor-pointer p-3 mb-px">
                <svg className="stroke-primary-400 mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="none" stroke-width="4"/></svg>
                <span className=" text-sm">{data.description}</span>
              </div>
            
          )}) :
          <div>Belum ada Todo</div>
        }
        </div>
          
      </div>
     </>
   )
 }
 