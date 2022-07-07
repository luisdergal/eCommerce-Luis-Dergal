import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/navbar'
import Cartwidget from './components/CartWidget/Cartwidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const Titulo = () => {
  return (
    <div>
    <ItemListContainer></ItemListContainer>
    </div>   
  )
    
}

function App() {
  return (
    <div className="App">
      <header className="header">
      <NavBar>
      </NavBar>
      </header>
      <div className='ejemplo'>
        <p>Luis Andres Dergal Almaraz</p>    
      </div>
        <ItemListContainer titulo="Bienvenido a mi e-Commmerce de Hardware" subtitulo="Aquí todos somos gama ultra." />
    </div>
  )
}

export default App
