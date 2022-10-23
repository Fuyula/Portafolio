import React from 'react'
import Typewriter from 'typewriter-effect';
import '../styles/components/greeting.scss';
import StalkerCat from './StalkerCat';

const Greeting = () => {
    /* <DevImg height='500px'/> */
  return (
    <div id = 'typewriter'>
        <StalkerCat className='card' id="stalker-cat"/>
        <div className='card' id='typewriter-container'>
            <h1 id="title">¡Hola! Soy <span>Paula</span>...</h1>
            <div className='description'>
                <p> Soy Paula Pérez, full-stack developer especializada en front-end, entusiasta del UI/UX, ¡y una orgullosa cat lady!</p>
                <br/>
            </div>
            <Typewriter
                options={{
                    strings: [
                        'Desarrollo full-stack', 
                        'Desarrollo front-end', 
                        'Diseño UI/UX'
                    ],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    </div>
  )
}

export default Greeting