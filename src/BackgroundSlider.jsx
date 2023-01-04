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
        width: '100%',
        backgroundSize: 'cover',
        height: '100%',
        margin: '10px',
    }
    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }
    const ReactPlayer = () => {}
  return (
    <div className='container-style '>
        <ReactPlayer
          width="1290px"
          height="890px"
          controls
          url="https://www.youtube.com/watch?v=Y_plhk1FUQA"
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