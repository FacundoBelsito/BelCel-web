import React from 'react'
import Contactanos from './Cards/Contactanos'
import Equipo from './Cards/Equipo'
import Metodologia from './Cards/Metodologia'
import './Nosotros.css'
import { BiSolidUserDetail } from "react-icons/bi";

const Nosotros = () => {
  return (
    <section className='pb-16'>
      <div className='desktop:mt-12 ml-12 flex items-center gap-x-4 div-titulo'>
        <h1 className='text-5xl text-white titulo'>Sobre nosotros</h1>
        <BiSolidUserDetail className='text-6xl' />
      </div>
      <article className='article-nos mt-12 w-full flex justify-around'>
        <Contactanos />
        <Equipo />
        <Metodologia />
      </article>

    </section>
  )
}

export default Nosotros
