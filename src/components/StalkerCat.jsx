import React, { useEffect, useRef, useState } from 'react'
import '../styles/components/stalker_cat.scss'

const StalkerCat = () => {
    const eyesRef = useRef();
    const eye1 = useRef();
    const eye2 = useRef();
    const [rot1, setRot1] = useState(0);
    const [rot2, setRot2] = useState(0);
    
    useEffect(() => {
        const handleWindowMouseMove = event => {
          eyeball(event.clientX , event.clientY , [eye1, eye2]);
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleWindowMouseMove);
        };
      }, []);

    
    const eyeball = (xcoord, ycoord, eyes) => {
        let c = 0;
        let x = eyesRef.current.getBoundingClientRect().left + 65;
        let y = eyesRef.current.getBoundingClientRect().top + 65;
        
        eyes.forEach(function(){
            let radian = Math.atan2(xcoord - x, ycoord - y);
            let rotation = (radian * (180/Math.PI) * -1) + 270;
            if (c === 0){
                setRot1(rotation)
            } else {
                setRot2(rotation)
            }
            c++;

        })
    }
  return (
    <div className='cat'>
        <div className='eyes' ref={eyesRef}>
            <div className='eye' ref={eye1} style={{transform: `rotate(${rot1}deg)`}}/>
            <div className='eye' ref={eye2} style={{transform: `rotate(${rot2}deg)`}}/>
        </div>
        
    </div>
  )
}

export default StalkerCat