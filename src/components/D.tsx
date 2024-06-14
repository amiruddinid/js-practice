import { useContext } from 'react'
import { CounterContext } from '../context/counterContext'

export default function D() {
  const { count, countUpdate } = useContext(CounterContext)
  return (
    <div>
      <input type="number"
        value={count} 
        onChange={(e) => countUpdate(e.target.value)}
      />
    </div>
  )
}
