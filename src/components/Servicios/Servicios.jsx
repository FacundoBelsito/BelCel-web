import React from 'react'
import { useState, useEffect } from "react"
import { getServices } from '../../mock/servicesMock'
import ListaServicios from '../ListaServicios/ListaServicios'
import { MdOutlineHomeRepairService } from "react-icons/md";


const Servicios = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        getServices()
            .then(response => {
                setServices(response)
            })
            .catch(error => {
                console.error(error)
            })
    })


    return (
        <section className=' w-full'>
            <div className='w-full mt-12 ml-12 flex gap-x-4 items-center'>
                <h1 className='text-5xl text-white'>Servicios</h1>
                <MdOutlineHomeRepairService className='text-5xl text-white' />
            </div>

            <article className='w-full text-2xl flex justify-around p-4 '>
                <ListaServicios services={ services } />

            </article>

        </section>
    )
}

export default Servicios
