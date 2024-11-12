import { createContext } from "react";
import Todos from "./TodoObj";

type todosContextType = {
    items: Todos[]
    addTodo: (text:string) => void,
    removeTodo: (id:string) => void,
    editTodo: (todoId:string, newText:string) => void
}

export const todosContext = createContext<todosContextType | null>(null)