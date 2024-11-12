import { useContext, useState } from 'react';
import { todosContext } from "../context/todos";

interface Todo{
    id:string,
    text:string
}

interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const ctxValue = useContext(todosContext);
  const { removeTodo, editTodo } = ctxValue ?? {};

  const handleSaveEdit = () => {
    if (editText.trim() && editTodo) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-md bg-white p-2 rounded shadow">
      {isEditing ? (
        <div className="flex gap-2 w-full">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border rounded w-full"
            autoFocus
          />
          <button
            onClick={handleSaveEdit}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setEditText(todo.text);
            }}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span className="flex-1 break-all">{todo.text}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={() => removeTodo?.(todo.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;