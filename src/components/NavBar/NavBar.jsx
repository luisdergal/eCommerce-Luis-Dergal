import React from 'react'
import Cartwidget from '../CartWidget/Cartwidget'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <a href=""><img src="../../../assets/images/losGamaLogo.svg" alt="" /></a>
        </div>
        <nav>
            <ul className='navLinks'>
                <li><a href="">Tarjetas graficas</a></li>
                <li><a href="">Procesadores</a></li>
                <li><a href="">Motherboards</a></li>
                <li><a href="">Fuentes de poder</a></li>
                <li><a href="">Gabinetes</a></li>
                <li><a href="">Memoria Ram</a></li>
                <li><a href="">Dispositivos de almacenamiento</a></li>
                <li><a href="">Monitores</a></li>
                <li><a href="">Periféricos</a></li>
            </ul>
        </nav>
        <Cartwidget></Cartwidget>
        <div>
        <span className='btnMenu'><FontAwesomeIcon icon={faAlignJustify}/></span>
        </div>
    </header>
  )
}

export default NavBar