import React from 'react';
import '../styles/App.scss';
import '../styles/pages/about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'; 
import { faCss3 } from '@fortawesome/free-brands-svg-icons'; 
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons'; 

const About = () => {
  const lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius porro mollitia reprehenderit quis, suscipit quaerat sed magni totam consectetur minus perspiciatis beatae sit facilis repellat aspernatur magnam, hic molestiae explicabo."
  const skills = [
    {
      name: 'JavaScript',
      icon: faJs,
      color: '#f7df1e',
    }, 
    {
      name: 'HTML5',
      icon: faHtml5,
      color: '#e34c26',
    },
    {
      name: 'CSS3',
      icon: faCss3,
      color: '#74bce9',
    },
    {
      name: 'Sass',
      icon: faSass,
      color: '#cc6699',
    },
    {
      name: 'React',
      icon: faReact,
      color: '#61dbfb',
    },
    {
      name: 'Python',
      icon: faPython,
      color: '#4b8bbe',
    },
   
  ]
  
  return (
    <div className="App">
      <main>
        <section className='about-section'>
          <div id='about-me-description'>
            <div>
              <h1>Sobre mí</h1>
              <p>{ lorem.repeat(3) }</p>
            </div>
            <div className='cv-buttons-container'>
              <button className='cv-button--filled pulse'>
                Descarga mi CV
              </button>
              <button className='cv-button--outlined pulse'>
                O míralo online
              </button>
            </div>
            <div id='about-me-skills'>
              <h1>Mis favoritos ❤️</h1>
              <div className='skills-container'>
                {
                  skills.map( (skill) => {
                    return(
                      <div className='skill' >
                        <FontAwesomeIcon icon={ skill.icon } className = 'skill-icon' style={{ color: skill.color }}/>
                        <p>{ skill.name }</p>
                      </div>
                      )
                    }
                  )
                }
              </div>
              
            </div>
          </div>
          <div id='about-me-image'>
            <img src={ require('../assets/me.jpg') } />
          </div>
        </section>
        <section id='experience-section'>
          <h1>Experiencia</h1>
          <div className='experience-cards-container'>
            <div className='experience-card'>
              <h3>Experiencia 1</h3>
              <span className='experience-date'><p>fecha</p></span>
              <p>{lorem}</p>
            </div>
            <div className='experience-card'>
              <h3>Experiencia 2</h3>
              <span className='experience-date'><p>fecha</p></span>
              <p>{lorem}</p>
            </div>
            <div className='experience-card'>
              <h3>Experiencia 3</h3>
              <span className='experience-date'><p>fecha</p></span>
              <p>{lorem}</p>
            </div>
            <div className='experience-card'>
              <h3>Experiencia 4</h3>
              <span className='experience-date'><p>fecha</p></span>
              <p>{lorem}</p>
            </div>
          </div>
        </section>
        <section className='about-section'>
          <div id='about-me-image'>
            <img src={ require('../assets/leon.png') } />
          </div>
          <div id='about-me-description'>
            <div>
                <h1>El gato León</h1>
                <p>{ lorem.repeat(5) }</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    
  )
}

export default About