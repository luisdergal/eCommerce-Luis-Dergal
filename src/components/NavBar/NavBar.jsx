import React, {useState} from 'react'
import Cartwidget from '../CartWidget/Cartwidget'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrochip} from '@fortawesome/free-solid-svg-icons'
import {faMemory} from '@fortawesome/free-solid-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'
import {faKeyboard} from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {

  return (
    <header className='shadow-sm'>
        <nav className="navbar navbar-expand-xl navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand ms-4" id='containerLogo' href="#"><img src="../../../assets/images/losGamaLogo.svg" id='logoGU' alt="LogoMarca" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 navLinks">
                    <div className='wrapper'>
                        <li className="nav-item me-2">
                        <a className="nav-link" href="#">Tarjetas gráficas</a>
                            <div className='iconoGF'> 
                                <img className='iconos grafica' src="../../../assets/images/tarjeta-grafica.svg" alt="" /> ?
                                <div className='toolTip'>
                                    <p> Estas se encargan de darle todo el poder a los gráficos de tus videojuegos.</p>
                                </div>
                            </div>
                        </li>
                    </div>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Procesadores</a>
                    <span className='iconosFa'><FontAwesomeIcon icon={faMicrochip}/></span>
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Motherboards</a>
                    <img className='iconos' src="../../../assets/images/motherboard.svg" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Fuentes de poder</a>
                    <img className='iconos' src="../../../assets/images/power-supply.svg" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Gabinetes</a>
                    <img className='iconos' src="../../../assets/images/tower-pc.svg" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Memoria Ram</a>
                    <span className='iconosFa'><FontAwesomeIcon icon={faMemory}/></span>
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Almacenamiento</a>
                    <img className='iconos' src="../../../assets/images/ssd-drive.svg" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Monitores</a>
                    <span className='iconosFa'><FontAwesomeIcon icon={faDesktop}/></span>
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Refrigeración</a>
                    <img className='iconos' src="../../../assets/images/cooler.svg" alt="" />
                    </li>
                    <li className="nav-item me-2">
                    <a className="nav-link" href="#">Periféricos</a>
                    <span className='iconosFa'><FontAwesomeIcon icon={faKeyboard}/></span>
                    </li>
                </ul>
                </div>
                <div className='me-4'>
                    <Cartwidget></Cartwidget>
                </div>
            </div>

        </nav>
    </header>
  )

}

export default NavBar