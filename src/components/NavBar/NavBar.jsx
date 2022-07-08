import React from 'react'
import Cartwidget from '../CartWidget/Cartwidget'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-xxl navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand ms-4" id='containerLogo' href="#"><img src="../../../assets/images/losGamaLogo.svg" id='logoGU' alt="LogoMarca" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 navLinks">
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Tarjetas gráficas</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Procesadores</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Motherboards</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Fuentes de poder</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Gabinetes</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Memoria Ram</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Almacenamiento</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Monitores</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Refrigeración</a>
                    </li>
                    <li className="nav-item me-3">
                    <a className="nav-link" href="#">Periféricos</a>
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