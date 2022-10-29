import React from 'react';
import '../styles/App.scss';
import '../styles/pages/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit perferendis laborum facilis nihil eius itaque sunt aliquam excepturi et ex, doloremque asperiores ab at nulla soluta vitae repellat! Ex, pariatur."
  return (
    <div className='App'>
        <main className='contact'>
            <h1>Contacto</h1>
            <p>{ lorem }</p>
            <div className='cv-buttons-container'>
              <button className='cv-button--filled pulse'>
                Descarga mi CV
              </button>
              <button className='cv-button--outlined pulse'>
                O míralo online
              </button>
            </div>
            <div className='contact-card'>
              <h2>Hablemos</h2>
              <p>{ lorem }</p>
              
              <div className='lets-talk'>
                <div className='lets-talk-icon-container'>
                  <a href="https://api.whatsapp.com/send?phone=+56981381524&text=Hola!">
                    <FontAwesomeIcon icon={ faWhatsapp } className='lets-talk-icon' />
                  </a>
                  <p>+56 9 81381524</p>
                </div>
                <div className='lets-talk-icon-container'>
                  <a 
                    href="mailto:paulasofiaperezmunoz@gmail.com" 
                    onClick={() => window.location = 'mailto:paulasofiaperezmunoz@gmail.com'}>
                    <FontAwesomeIcon icon={ faEnvelope } className='lets-talk-icon' />
                  </a>
                  <p>paulasofiaperezmunoz@gmail.com</p>
                </div>
                <div className='lets-talk-icon-container'>
                  <a href="https://www.linkedin.com/in/paula-sofia-perez-munoz/">
                    <FontAwesomeIcon icon={ faLinkedin } className='lets-talk-icon' />
                  </a>
                  <p>Paula Sofía Pérez Muñoz</p>
                </div>
              </div>
            </div>
        </main>
        
    </div>
  )
}

export default Contact