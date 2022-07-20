import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <div className='ejemplo' >
        <p>Luis Andres Dergal Almaraz</p>
        <br />    
        <h1>Bienvenido a mi E-Commerce hecho en React.</h1>
        <br />
        <br />
        <br />
      </div>
        <ItemListContainer/>
    </div>
  )
}

export default App
