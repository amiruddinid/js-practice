import { createContext, useState } from "react";

export const CounterContext = createContext(0)

export default function CounterProvider({ children }){
  const [count, setCount] = useState(10)

  const countIncrement = () => {
    console.log('dari context', count)
    setCount((count) => count + 1)
  }

  const countUpdate = (value) => {
    setCount(+value)
  }

  return (
    <CounterContext.Provider value={{count, countIncrement, countUpdate}}>
      { children }  
    </CounterContext.Provider>
  )
}