import React from 'react'
import Cartwidget from '../CartWidget/Cartwidget'

const NavBar = () => {
  return (
    <div>
        <div className='containerCartwidget'>
            <a href="#"><Cartwidget></Cartwidget></a>
        </div>
        <div className='center'>
            {/* LOGO */} 
            <div className='logo'>
                <a href="#"><img src="../../../assets/images/losGamaLogo.svg" className='eCommerceLogo' alt="logo" /></a>
            </div>
            {/* MENÚ */} 
            <div>

                    <nav className='menu'>
                        <ul>
                            <li>
                                <a href="#">Tarjetas Gráficas</a>
                            </li>
                            <li>
                                <a href="#">Procesadores</a>
                            </li>
                            <li>
                                <a href="#">MotherBoards</a>
                            </li>
                            <li>
                                <a href="#">Fuentes de Poder</a>
                            </li>
                            <li>
                                <a href="#">Gabinetes</a>
                            </li>
                            <li>
                                <a href="#">Memoria Ram</a>
                            </li>         
                            <li>
                                <a href="#">Dispositivos de Almacenamiento</a>
                            </li>
                            <li>
                                <a href="#">Monitores</a>
                            </li>
                            <li>
                                <a href="#">Periféricos</a>
                            </li>        
                        </ul>
                    </nav>
                <div className='Clearfix'></div>
            </div>
        </div>
    </div>
  )
}

export default NavBar