import React, { useEffect } from 'react'
import './BackgroundSlider.css'
import imageSlide from './data'
import { useState } from 'react'


const BackgroundSlider = () => {
    const [currentState,setCurrentState]= useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState===2){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
        },5000)
        return ()=> clearTimeout(timer)
    },[currentState])
    const bgImageStyle={
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }
    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }
    const ReactPlayer = () => {}
  return (
    <div className='container-style '>
        <ReactPlayer
          width="720px"
          height="360px"
          controls
          url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
          autoPlay
        />
        <div className='transparent-background'></div>
     <div style={bgImageStyle} ></div>
     <div className='description' >
        <div>
            <h1>{imageSlide[currentState].title}</h1>
            <p>{imageSlide[currentState].body}</p>
        </div>
        <div className='carousel-boullt' >
        {
            imageSlide.map((imageSlide,currentState)=>(
                <span key={currentState} onClick={()=> goToNext(currentState) }></span>
            ))
        }
        </div>
     </div>

    </div>
  )
}

export default BackgroundSlider