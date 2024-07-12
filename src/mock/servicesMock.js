const services = [
    {
        name: 'Landing Page',
        description: 'Ofrecemos el diseño y desarrollo de landing pages optimizadas para convertir visitantes en clientes potenciales. Con un enfoque claro y llamadas a la acción efectivas, te ayudamos a maximizar tus conversiones y alcanzar tus objetivos de marketing. Incluimos diseño responsive para una experiencia óptima en cualquier dispositivo.',
        technologies: ['Web de una sola página diseñada para captar clientes potenciales con una llamada a la acción clara.']
    },
    {
        name: 'Tienda Online',
        description: 'Transforma tu negocio con nuestra solución integral de tiendas online. Desarrollamos plataformas de comercio electrónico seguras y eficientes, incluyendo catálogos de productos, carritos de compra, sistemas de pago y opciones de envío. Incluimos diseño responsive para una navegación cómoda desde cualquier dispositivo.',
        technologies: ['Sitio web para comprar productos o servicios con carrito de compra y pagos en línea.']
    },
    {
        name: 'Catálogo',
        description: 'Presenta tus productos de manera profesional con nuestros catálogos online. Creamos catálogos digitales atractivos y detallados para promocionar tu oferta y atraer a potenciales clientes. Incluimos diseño responsive para una visualización óptima en cualquier dispositivo.',
        technologies: ['Plataforma digital en línea que muestra diversos productos o servicios sin opción de compra directa.']
    },
    {
        name: 'WEB corporativa',
        description: 'Fortalece la presencia en línea de tu empresa con nuestras webs corporativas. Desarrollamos sitios web que reflejan la identidad y valores de tu organización, comunicando tu mensaje de manera efectiva e incluyendo secciones clave como ‘Quiénes somos’, ‘Misión y visión’ y ‘Servicios’. Incluimos diseño responsive para accesibilidad en todos los dispositivos.',
        technologies: ['Representá a tu empresa en línea, ofreciendo información sobre tus productos, servicios y contacto.']






        
    }

]

export default services 

export const getServices = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(services)
        }, 500)
    })
}