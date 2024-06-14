import { createContext, useState } from "react";

export const TodoContext = createContext(null)

export default function TodoProvider({ children }){
  const [todo, setTodo] = useState()

  const getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await res.json()

    setTodo(json)
  }

  const filterTodo = async(userId, completed) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}&completed=${completed}`
    )
    const json = await res.json()

    setTodo(json)
  }

  return (
    <TodoContext.Provider value={{todo, getTodo, filterTodo}}>
      { children }  
    </TodoContext.Provider>
  )
}