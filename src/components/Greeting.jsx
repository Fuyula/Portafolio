import React, {useContext} from 'react'
import Typewriter from 'typewriter-effect';
import '../styles/components/greeting.scss';
import CodingGirl from './CodingGirl';
import StalkerCat from './StalkerCat';
import LanguageContext from '../contexts/LanguageContext';

const Greeting = () => {
    /* 
    <DevImg height='500px'/> 
    <StalkerCat className='card' id="stalker-cat"/>
    */
    const { typewriterText, greetings } = useContext(LanguageContext).currentLangData;
    console.log( typewriterText )
  return (
    <div id = 'typewriter'>
        <div className='card'>
            <CodingGirl />
        </div>
        <div className='card' id='typewriter-container'>
            <h1 id="title">{ greetings } <span>Paula</span>...</h1>
            <div className='description'>
                <p> Soy Paula Pérez, full-stack developer especializada en front-end, entusiasta del UI/UX, ¡y una orgullosa cat lady!</p>
                <br/>
            </div>
            <Typewriter
                options={{
                    strings: typewriterText,
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    </div>
  )
}

export default Greeting