import React from 'react';
import '../styles/App.scss';
import '../styles/pages/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Form from '../components/form/Form'

const Contact = () => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit perferendis laborum facilis nihil eius itaque sunt aliquam excepturi et ex, doloremque asperiores ab at nulla soluta vitae repellat! Ex, pariatur."
  return (
    <div className='App'>
        <main className='contact'>
          <div className='contact-card'>
            <h1>Contacto</h1>
            <p>{ lorem }</p>
            <div className="divider">
              <div className="form-container">
                <h2>Escríbeme</h2>
                <Form />
              </div>
              <div className='lets-talk'>
                <h2>Encuéntrame también en...</h2>
                <p>{ lorem }</p>
                <div className="icons-container">
                  <div className='lets-talk-icon-container'>
                    <a href="https://api.whatsapp.com/send?phone=+56981381524&text=Hola!">
                      <FontAwesomeIcon icon={ faWhatsapp } className='lets-talk-icon' />
                    </a>
                    <p>WhatsApp</p>
                  </div>
                  <div className='lets-talk-icon-container'>
                    <a 
                      href="mailto:paulasofiaperezmunoz@gmail.com" 
                      onClick={() => window.location = 'mailto:paulasofiaperezmunoz@gmail.com'}>
                      <FontAwesomeIcon icon={ faEnvelope } className='lets-talk-icon' />
                    </a>
                    <p>Email</p>
                  </div>
                  <div className='lets-talk-icon-container'>
                    <a href="https://www.linkedin.com/in/paula-sofia-perez-munoz/">
                      <FontAwesomeIcon icon={ faLinkedin } className='lets-talk-icon' />
                    </a>
                    <p>LinkedIn</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
              
        </main>
        
    </div>
  )
}

export default Contact