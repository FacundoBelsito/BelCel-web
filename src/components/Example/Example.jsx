import React, { useState } from 'react';
import VerticalCarousel from '../VerticalCarousel/VerticalCarousel';
import { config } from 'react-spring';
import proyectos from '../../mock/projectsMock';
import { IoCodeSlash } from "react-icons/io5";
import './Example.css'

const Example = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);

  const slides = proyectos.map(proyecto => ({
    key: proyecto.id,
    content: (
      <article className='carousel-projects flex justify-between text-white font-[rowdies] items-center p-4 desktop:w-9/12 border-red-700 border-2 rounded-lg bg-black/50 backdrop-blur-3xl shadow-md shadow-red-600 altura-maybe'>     
        <div className='text-sm p-4 flex flex-col desktop:gap-y-10 gapeano'>
          <h3 className='text-3xl mb-4'>{proyecto.title}</h3>
          <p className='w-50 text-lg pt-4'>{proyecto.description}</p>
          <a className='text-lg border w-max p-2 rounded-lg hover:text-black hover:bg-white btn-car' target='_blank' href={proyecto.url}>{proyecto.button}</a>
          <div className='flex gap-x-8 mt-12 text-3xl'>
            {proyecto.technologies}
          </div>
          
        </div>
        <img src={proyecto.imageUrl} alt={proyecto.title} className='w-2/3 h-5/6 p-2 car-img' />
      </article>
    )
  }));

  return (
    <div className='flex flex-col justify-center h-[110vh] w-full'>
      <div className='w-full flex items-center ml-12 mb-16 gap-x-4 titulo-projects'>
        <h1 className='text-5xl text-white font-[rowdies]'>Proyectos</h1> 
        <IoCodeSlash className='text-white text-5xl mt-2' />
      </div>
      
      <div className='w-full h-[60vh] p-4'>
        <VerticalCarousel
        slides={slides}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={animationConfig}
      />
      </div>
      
    </div>
  );
};

export default Example;

