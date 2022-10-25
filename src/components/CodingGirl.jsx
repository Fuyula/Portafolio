import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../assets/coding-girl.json'

const CodingGirl = ({ size = '100%' }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <Lottie 
	    options={defaultOptions}
        width={ size }
      />
  )
}

export default CodingGirl