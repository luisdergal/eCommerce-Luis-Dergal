import Cartwidget from '../CartWidget/Cartwidget'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDesktop, faKeyboard, faMemory, faMicrochip,} from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'



const NavBar = () => {

    const { cantidadTotal } = useCartContext()
  return (
    <header className='shadow-sm'>
        <div className='barraRGB'></div>
        <nav className="navbar navbar-expand-xl navbar-custom">
            <div className="container-fluid">

                <NavLink to='/'>
                <span className="navbar-brand ms-4" id='containerLogo'><img src="https://images2.imgbox.com/d7/b6/MqvMfm7H_o.png" id='logoGU' alt="LogoMarca" /></span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 navLinks">
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Tarjetas_graficas'>Tarjetas gráficas</NavLink> 
                        <img className='iconos' src="https://images2.imgbox.com/a4/b9/d3bBMZMJ_o.png" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Procesadores'>Procesadores</NavLink> 
                    <span className='iconosFa'><FontAwesomeIcon icon={faMicrochip}/></span>
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Motherboards'>Motherboards</NavLink> 
                    <img className='iconos' src="https://images2.imgbox.com/8e/4c/MaHv6sUL_o.png" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Fuentes_de_poder'>Fuentes de poder</NavLink> 
                    <img className='iconos' src="https://images2.imgbox.com/6e/37/nwRcnNEf_o.png" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Gabinetes'>Gabinetes</NavLink> 
                    <img className='iconos' src="https://images2.imgbox.com/0e/1a/FziJzcWo_o.png" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Memoria_Ram'>Memoria Ram</NavLink> 
                    <span className='iconosFa'><FontAwesomeIcon icon={faMemory}/></span>
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Almacenamiento'>Almacenamiento</NavLink> 
                    <img className='iconos' src="https://images2.imgbox.com/0e/58/z1LNuUN6_o.png" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Monitores'>Monitores</NavLink> 
                    <span className='iconosFa'><FontAwesomeIcon icon={faDesktop}/></span>
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Refrigeracion'>Refrigeración</NavLink> 
                    <img className='iconos' src="https://images2.imgbox.com/0d/a1/6oehEI1H_o.png" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <NavLink className='nav-link' to='/categoria/Perifericos'>Periféricos</NavLink> 
                    <span className='iconosFa'><FontAwesomeIcon icon={faKeyboard}/></span>
                    </li>
                </ul>
                </div>
                <div className='me-4'>
                    <Link to='/cart'>
                    <Cartwidget/>
                    </Link>
                    <p className='cantidadCarrito'>{ cantidadTotal() !== 0 && cantidadTotal() }</p>
                </div>
            </div>
        </nav>
    </header>
  )


}

export default NavBar