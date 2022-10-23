import React from 'react'
import '../styles/components/project.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse perferendis corporis odit dolorem cumque modi animi incidunt, aut, laudantium ad praesentium? Quasi cum, praesentium aliquam modi voluptas unde tempora eveniet.'

const Project = ({ project = "Proyecto", description = lorem, tecnologies = "Tec1, Tec2, Tec3.", image = 'leon', urls = {}}) => {
    
    const selectImage = ( image ) => {
        if ( image === "psy") {
            return {
                img1: require('../assets/flower-psy-web.png'),
                img2: require('../assets/flower-psy-web-h1.png'),
                img3: require('../assets/flower-psy-web-h2.png'),
            }
        } else if ( image === "notepath" ) {
            return {
                img1: require('../assets/notepath.jpeg'),
                img2: require('../assets/notepath-h1.jpeg'),
                img3: require('../assets/notepath-h2.jpeg'),
            }
        } else {
            return require('../assets/leon.png')
        }
    } 
    return (
        <div className='project-card'>
            <div className='project-name'>
                <div id="project-name">
                    
                   <h2> { project } </h2>
                    <img src={ selectImage( image ).img1 } alt = "" />
                    <div className='project-buttons'>
                        { urls.github && <a href={ urls.github }>
                            <button>
                                <FontAwesomeIcon icon={ faGithub } />
                            </button>
                            GitHub
                        </a>}
                        { urls.web && <a href={ urls.web }>
                            <button>
                                <FontAwesomeIcon icon={ faGlobe } />
                            </button>
                            Sitio web
                        </a>}
                    </div>
                </div>
                <div className='hidden-project-details'>
                    <div className='hidden-project-gallery'>
                        <img src = { selectImage( image ).img1 } alt = "" />
                        <img src = { selectImage( image ).img2 } alt = "" />
                        <img src = { selectImage( image ).img3 } alt = "" />
                    </div>
                </div>
            </div>
            <div className='project-description'>
                <p> { description } </p>
                <div>
                    <p> Tecnologías </p>
                    <p> { tecnologies } </p>
                </div>
            </div>
        </div>
    )
    }

export default Project