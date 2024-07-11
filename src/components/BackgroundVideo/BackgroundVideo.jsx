import React, { useEffect, useRef } from 'react';
import './BackgroundVideo.css';
import Inicio from '../Inicio/Inicio';

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const updateVideoAttributes = () => {
      if (window.innerWidth <= 768) { // Definiendo 768px como el tamaño máximo para teléfonos
        videoRef.current.removeAttribute('loop');
      } else {
        videoRef.current.setAttribute('loop', ''); // Añadir el atributo loop
      }
    };

    // Llamar a la función en el momento de la carga de la página
    updateVideoAttributes();

    // Llamar a la función cuando la ventana cambia de tamaño
    window.addEventListener('resize', updateVideoAttributes);

    // Limpiar el evento de escucha cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', updateVideoAttributes);
    };
  }, []);

  return (
    <div className='video-container'>
      <video className='fixed' autoPlay muted ref={videoRef} src="../video/humo3.mp4"></video>
    </div>
  );
}

export default BackgroundVideo;
