import React from 'react'
import './BackgroundVideo.css'
import Inicio from '../Inicio/Inicio'

const BackgroundVideo = () => {
  return (
    <div className='video-container'>
        <video className='fixed' autoPlay loop muted src="../video/humo3.mp4"></video>
    </div>
  )
}

export default BackgroundVideo