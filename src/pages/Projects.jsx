import React from 'react'
import '../styles/pages/projects.scss'
import Project from '../components/Project'

const projectsInfo = [
    { 
        name: "Flower themed pychologist website",
        description: ``,
        tecnologies: "HTML, Sass, JavaScript",
        image: 'psy',
        urls: { 
            github: 'https://github.com/Fuyula/flower-themed-website-for-psychologist', 
            web: 'https://fuyula.github.io/flower-themed-website-for-psychologist/index.html' 
        }
    },
    { 
        name: "Notepath",
        description: ``,
        tecnologies: "React Native, CSS, Ruby on Rails, Elastic, PostgreSQL",
        image: 'notepath',
        urls: { web: 'https://notepath.cl/' }
    },
    { 
        name: 'Portafolio',
        description: ``,
        tecnologies: "React, Sass",
        image: '',
        urls: {}
    },
    { 
        name: 'Herramientas internas ZTZ',
        description: ``,
        tecnologies: "",
        image: '',
        urls: {}
    },
    { 
        name: 'Dashboard SVC',
        description: ``,
        tecnologies: "React, Flask, MongoDB, MongoDB Atlas, Heroku",
        image: '',
        urls: {}
    },
]
const Projects = () => {
  return (
    <div className='App'>
        <main>
            <div className='Projects'>
                <h1>Proyectos</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quasi corrupti 
                    nostrum iure tempore ducimus perferendis animi officiis odit illum, doloribus ipsa 
                    culpa dolorum obcaecati eos adipisci sit consectetur possimus!
                </p>
                <div className='projects-container'>
                    {
                        projectsInfo.map( (project) => {
                            return (
                                <Project 
                                    project = { project.name}
                                    description = { project.description } 
                                    tecnologies = { project.tecnologies } 
                                    image = { project.image } 
                                    urls = { project.urls }
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    </div>
  )
}

export default Projects