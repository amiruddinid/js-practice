import { useState, useContext, useEffect } from 'react'
import { CounterContext } from '../context/counterContext'
import { TodoContext } from '../context/todoContext'

export default function Home() {
  const { count, countIncrement } = useContext(CounterContext)
  const { todo, getTodo, filterTodo } = useContext(TodoContext)
  const [ filter, setFilter] = useState({
    userId: '',
    completed: true
  })

  const filterHandler = (e) => {
    const name = e.target.name
    const val = e.target.value

    setFilter({
      ...filter,
      [name] : val
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    filterTodo(filter.userId, filter.completed)
  }

  useEffect(() => {
    let ignore = false;
    if(!ignore)  

    return () => {
      ignore = true;
    }
  }, [])
  

  return (
    <div>
        <h1>Home</h1>
        <div className="card">
            <button onClick={countIncrement}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <div>
          <h3>Filter</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={(e) => filterHandler(e)} name="userId" />
            <input type="text" onChange={(e) => filterHandler(e)} name="completed" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {
              todo ? todo.map(e => (
                <tr>
                  <td>{e.userId}</td>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.completed.toString()}</td>
                </tr>
              )) : 'no data'
            }
          </tbody>
        </table>
    </div>
  )
}
