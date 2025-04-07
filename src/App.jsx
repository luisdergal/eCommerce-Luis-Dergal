import './App.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Cart from './components/Cart/Cart'
import CartContextProvider from './Context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import NotFound from './components/NotFound/NotFound'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (     
    <BrowserRouter>

    <CartContextProvider>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={ <ItemListContainer/>} />
          <Route path='/detail/:detailId' element={ <ItemDetailContainer/> } />
          <Route path='/cart' element={ <Cart/> } />  
          <Route path='/NotFound' element={ <NotFound/> }/>

          <Route path='*' element={ <Navigate to='/NotFound'/> }/>
        </Routes>
        <div className='ejemplo' >
          <br />
          <br />
          <p>Luis Andres Dergal Almaraz  ©</p><a className='iconoGitHub' href="https://github.com/luisdergal/eCommerce-Luis-Dergal"><FontAwesomeIcon icon={faGithub}/></a>
          <br />
        </div>
      </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
