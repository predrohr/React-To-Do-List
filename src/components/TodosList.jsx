import Todo from './Todo.jsx';
import { useTodos } from '../TodosContext.jsx';


function TodosList() {

  const store = useTodos();

  return (
    <>
        <div className="todos">
          {store.filteredTodos().lenght ? store.filteredTodos().map(todo => 
            <Todo
              todo={todo}
              key={todo.id}
            />
          ) : "No to-dos here"
        }
        </div>
    </>
  )
}

export default TodosList