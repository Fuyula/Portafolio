import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/components/sidenav.scss'

const SideNav = ({ visibility, setVisibility }) => {
    return (
        <div id="sideNav" className="overlay" style={{ width:  visibility? '100%' : '0%' }}>
            <button className="closebtn" onClick={ () => setVisibility(false) }>&times;</button>
            <div className="overlay-content">
                <li><NavLink to="/" strict end className={'nav-links'} onClick={ () => setVisibility(false) }>Inicio</NavLink></li>
                <li><NavLink to="/about" strict end className={'nav-links'} onClick={ () => setVisibility(false) }>Sobre mí</NavLink></li>
                <li><NavLink to="/projects" strict end className={'nav-links'} onClick={ () => setVisibility(false) }>Proyectos</NavLink></li>
                <li><NavLink to="/contact" strict end className={'nav-links'} onClick={ () => setVisibility(false) }>Contacto</NavLink></li>
            </div>
        </div>
    )
}

export default SideNav