import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Order from './pages/Order'

function App() {
  const [currentPages, setCurrentPages] = useState('home')

  const handleChangePages = (menu: string) => {
    setCurrentPages(menu)
  } 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <a href="#" onClick={() => handleChangePages('home')}>Home</a>
        <a href="#" onClick={() => handleChangePages('order')}>Order</a>
      </div>
      
      {
        currentPages === 'home' ?
          <Home />
        : 
          <Order />
      }
    </>
  )
}

export default App
