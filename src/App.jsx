import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/navbar'
import Cartwidget from './components/CartWidget/Cartwidget'
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
      </div>
        <ItemListContainer titulo="Bienvenido a mi e-Commmerce de Hardware" subtitulo="Aquí todos somos gama ultra." />
    </div>
  )
}

export default App
