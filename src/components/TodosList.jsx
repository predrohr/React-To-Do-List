import Todo from './Todo.jsx';
import { useTodos } from '../TodosContext.jsx';


function TodosList() {

  const store = useTodos();

  return (
    <>
        <div className="todos">
          {store.todos.map(todo => 
            <Todo
              todo={todo}
              key={todo.id}
            />
          )}
        </div>
    </>
  )
}

export default TodosList