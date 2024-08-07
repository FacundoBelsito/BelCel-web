import React from 'react'
import './Contactanos.css'

const Contactanos = () => {

  const handleScroll = (event, sectionId) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div className='border-2 border-red-600 rounded-xl w-3/12 p-2 bg-black/50 backdrop-blur-3xl shadow-lg shadow-red-600 contactanos'>
      <h1 className='text-4xl mb-4 pl-3 pt-2 tamaño-letra1'>Nosotros</h1>
      <p className='w-34 h-34 text-2xl pl-3 pr-3 tamaño-letra2'>En BelCel, nos especializamos en el desarrollo web, creando soluciones digitales personalizadas que impulsan el crecimiento de nuestros clientes. Nuestro equipo de expertos utiliza las últimas tecnologías para transformar tus ideas en realidades digitales, ofreciendo servicios de alta calidad y atención al detalle. <br></br>Confía en BelCel para llevar tu presencia en línea al siguiente nivel.</p>
      <div className='flex justify-center desktop:p-10 boton'>
        <a className='w-44 border-2 hover:bg-white hover:text-sky-500 rounded-xl text-center text-xl p-1 tamaño-letra2 boton' href="#contacto" onClick={(e) => handleScroll(e, 'contacto')}>
          CONTACTANOS
        </a>
      </div>
    </div>
  )
}

export default Contactanos
