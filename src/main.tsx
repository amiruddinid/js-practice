import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CounterProvider from './context/counterContext.tsx'
import './index.css'
import TodoProvider from './context/todoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </CounterProvider>
  </React.StrictMode>,
)
