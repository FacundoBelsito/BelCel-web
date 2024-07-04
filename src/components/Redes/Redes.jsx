import React, { useState } from 'react';
import './Redes.css';
import { GrContact } from "react-icons/gr";

const Redes = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIcon(index);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const icons = [
    {
      url: "https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000",
      text: "1137704374 / 2494380835"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
      text: "@belcel.devs" 
    },
    {
      url: "https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000",
      text: "belcel.devs@gmail.com"
    },
    {
      url: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000",
      text: "belcel" 
    }
  ];

  return (
    <article className='p-4 mt-1'>
      <div className='mt-12 flex items-center justify-center gap-x-4 text-center w-full'>
        <h1 className='text-5xl text-white font-[Rowdies] '>Contactate con nosotros</h1>
        <GrContact className='text-white text-4xl' />
      </div>
      
      <div className='flex justify-center mt-16 pb-6'>
        <div className='border-2 border-sky-600 shadow-lg shadow-sky-600 rounded-xl w-[29%] p-2 justify-center flex flex-col bg-black/50 backdrop-blur-3xl text-white font-[rowdies] cuadrito'>
          <h2 className='flex text-4xl p-4'>Nuestras redes</h2>
          <h3 className='pl-4 text-2xl'>Comunicate con nosotros para una mejor atencion!</h3>
          <div className='flex flex-col p-3 gap-y-6 mt-10'>
            {icons.map((icon, index) => (
              <div
                key={index}
                className='relative flex items-center w-max'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img className='w-14' src={icon.url} alt={`Icon ${index + 1}`} />
                <div
                  className={`text-black bg-gray-200 p-2 rounded-lg shadow-md text-center transition-all duration-300 transform ${
                    hoveredIcon === index ? 'opacity-100 translate-x-0 slide-right' : 'opacity-0 translate-x-2'
                  }`}
                  style={{ left: '100%', top: '10%' }}
                >
                  
                  <p className='w-full text-2xl animate-slide-right'>{icon.text}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
  
}

export default Redes;
