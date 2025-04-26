import { useContext } from 'react';
import { TodosContext } from '../TodosContext.js';
import Todo from './Todo.jsx';

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

function TodosList() {

  const store = useContext(initialTodos);

  function deleteHendler(id){
    if(confirm('Are you sure you want to delete the to-do?')){
      store.setTodos(store.todos.filter(todo => todo.id !== id));
    }
  }

  function toggleIsDoneHendler(id){
    setTodos(store.todos.map(todo => {
      if(todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    }));
  }

  return (
    <>
        <div className="todos">

          {store.todos.map(todo => 
            <Todo
            deleteTodo={(id) => deleteHendler(id)}
            toggleIsDone={(id) => toggleIsDoneHendler(id)}
            todo={todo}
            key={todo.id}
          />
          )
          }

        </div>
    </>
  )
}


export default TodosList  