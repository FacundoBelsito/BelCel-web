import React from 'react'
import Service from '../Service/Service'


const ListaServicios = ({ services }) => {
    return (

        services.map(service => {
            
            return <Service key={service.name} {...service} />

        })

    )
}

export default ListaServicios
