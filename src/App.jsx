import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/navBar/navbar'

function App() {
  return (
    <div className="App">
      <header className="header">
      <NavBar />
      </header>
      <div className='ejemplo'>
        <p>Luis Andres Dergal Almaraz</p>
      </div>
    </div>
  )
}

export default App
