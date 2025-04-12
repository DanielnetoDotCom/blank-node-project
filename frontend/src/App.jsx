import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PingPong from './components/PingPong'; 
import { API_BASE_URL } from './config/env.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">My System Dashboard</h1>
        <p className="">Connected to Backend Services</p>
      </header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <PingPong baseUrl={API_BASE_URL} />
      </div>
    </>
  )
}

export default App
