import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar>
      </NavBar>
      <Routes>
      <Route index path='/' element={<ItemListContainer />} />
      <Route index path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={ <Navigate to='/' /> } />
          <Route path='/cart' element={<Cart />} />                           
          </Routes>
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
    </BrowserRouter>
  )
}

export default App
