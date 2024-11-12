import TodoItem from "./TodoItem";
import { useState, useContext } from "react";
import { todosContext } from "../context/todos";
function Todos() {
  const ctxValue = useContext(todosContext);
  const { items, addTodo } = ctxValue ?? {};
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() && addTodo) {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <main className="min-h-screen bg-slate-300 flex flex-col items-center gap-2 p-8">
      <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
      
      <div className="flex flex-col gap-2 w-full max-w-md">
        <input
          className="rounded h-10 bg-slate-50 px-3"
          required
          placeholder="Enter a new todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button 
          onClick={handleAddTodo}
          className="px-6 rounded h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium"
        >
          Add Todo
        </button>
      </div>

      <div className="w-full max-w-md flex flex-col gap-3">
        {items && items.length > 0 ? (
          items.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <p className="text-center text-gray-600">No todos yet. Add one above!</p>
        )}
      </div>
    </main>
  );
}

export default Todos;