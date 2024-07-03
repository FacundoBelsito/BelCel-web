import './NavBar.css'


const NavBar = () => {

  const handleScroll = (event, sectionId) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (

    <header className='w-full flex justify-center'>

      <nav className='fixed text-white text-lg font-[rowdies] border-2 rounded-3xl border-white w-7/12 flex justify-center gap-x-12 mt-4 p-2 bg-black/50 backdrop-blur-3xl z-50'>
        <a className='hover:bg-white hover:text-black hover:rounded-lg p-2' href="#inicio" onClick={(e) => handleScroll(e, 'inicio')}>INICIO</a>
        <a className='hover:bg-white hover:text-black hover:rounded-lg p-2' href="#nosotros" onClick={(e) => handleScroll(e, 'nosotros')}>NOSOTROS</a>
        <a className='hover:bg-white hover:text-black hover:rounded-lg p-2' href="#servicios" onClick={(e) => handleScroll(e, 'servicios')}>SERVICIOS</a>
        <a className='hover:bg-white hover:text-black hover:rounded-lg p-2' href="#proyectos" onClick={(e) => handleScroll(e, 'proyectos')}>PROYECTOS</a>
        <a className='hover:bg-white hover:text-black hover:rounded-lg p-2' href="#contacto" onClick={(e) => handleScroll(e, 'contacto')}>CONTACTO</a>
      </nav>

    </header>
  )
}

export default NavBar

