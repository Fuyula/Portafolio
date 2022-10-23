import '../styles/components/header.scss'
import React from 'react'
import ChangeThemeToggleSwitch from './ChangeThemeToggleSwitch'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setVisibility }) => {
  return (
    <header>
      <div>
        <img alt="Logo"/>
        <h3>Paula</h3>
        <div>
          <FontAwesomeIcon icon={ faBars } size="lg" className='sidenav-icon' onClick={() => setVisibility( true )}/>
        </div>
      </div>
      <div>
        <div id="nav">
          <ul>
            <li><NavLink to="/" strict end className='slide'>Inicio</NavLink></li>
            <li><NavLink to="/about" strict end className='slide'>Sobre mí</NavLink></li>
            <li><NavLink to="/projects" strict end className='slide'>Proyectos</NavLink></li>
            <li><NavLink to="/contact" strict end className='slide'>Contacto</NavLink></li>
          </ul>
        </div>
        
        <div id="toggle-button">
          <ChangeThemeToggleSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header