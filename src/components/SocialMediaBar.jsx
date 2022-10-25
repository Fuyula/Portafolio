import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/social_media_bar.scss'


const SocialMediaBar = () => {
  return (
    <div class="icon-bar">
        <a href="https://www.linkedin.com/in/paula-sofia-perez-munoz/"><FontAwesomeIcon icon={ faLinkedin } /></a>
        <a href="https://github.com/Fuyula"><FontAwesomeIcon icon={ faGithub } /></a>
        <a href="https://api.whatsapp.com/send?phone=+56981381524&text=Hola!"><FontAwesomeIcon icon={ faWhatsapp } /></a>
        <a href="mailto:paulasofiaperezmunoz@gmail.com" onClick={() => window.location = 'mailto:paulasofiaperezmunoz@gmail.com'}><FontAwesomeIcon icon={ faEnvelope } /></a>
    </div>
  )
}

export default SocialMediaBar