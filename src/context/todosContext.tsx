import { todosContext } from "./todos";
import { ReactNode, useState } from "react";
import  TodoObj  from "./TodoObj";

type TodosType = {
    children: ReactNode,
}

export const TodosProvider = ({children}: TodosType) => {
    const [todos, setTodos] = useState<TodoObj[]>([]);

    const handleAddTodos = (text: string) => {
        setTodos((prevTodos) => {
            return [...prevTodos, new TodoObj(text)]
        })
    }

    const handleRemoveTodos = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => {
                return todo.id !== id
            })
        })
    }

    const handleEditTodos = (todoId: string, newText: string) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todoId === todo.id) {
                    const updatedTodo = new TodoObj(newText);
                    updatedTodo.id = todo.id;
                    return updatedTodo;
                }
                return todo;
            })
        })
    }

    return (
        <todosContext.Provider value={{items: todos, addTodo: handleAddTodos, removeTodo: handleRemoveTodos, editTodo: handleEditTodos}}>
            {children}
        </todosContext.Provider>
    )
}

