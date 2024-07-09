import React, { useState } from 'react';
import { Modal } from "../Modal/Modal";
import './Service.css';

const Service = ({ name, description, technologies, shortdes }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleLeerMasClick = () => {
        setIsOpen(true);
        setIsClosing(false);
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false); 
            setIsClosing(false);
        }, 100); // 
    };

    return (
        <article className={`w-1/5 service-card border border-sky-600 article-tel shadow-lg shadow-sky-600 h-max rounded-lg mt-12 p-4 bg-black/50 backdrop-blur-3xl 
                            ${isOpen ? 'expanded flip-in-ver-left ' : 'flip-in-ver-right'}`}>
            {!isOpen && (
                <div className='p-2'>
                    <h2 className='text-4xl mb-4 pl-3 pt-1 tamaño-titulo'>{name}</h2>
                   
                    <h2 className='text-2xl tamaño-texto '>{technologies}</h2>
                    <h2 className='text-center mt-10 rounded-xl border-2 p-1 border-white tamaño-texto'>
                        <button onClick={handleLeerMasClick}>Mas info!</button>
                    </h2>
                </div>
            )}
            {isOpen && (
                <Modal key={name} description={description} isOpen={isOpen} closeModal={handleCloseModal} />
            )}
        </article>
    );
};

export default Service;
