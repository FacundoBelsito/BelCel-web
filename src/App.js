import Nosotros from './components/Nosotros/Nosotros'
import Servicios from './components/Servicios/Servicios'
import Example from './components/Example/Example'
import Redes from './components/Redes/Redes'
import Footer from './components/Footer/Footer'
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo'
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/Inicio/Inicio'
import './App.css'



function App() {
  return (
    <>
      <NavBar />
      <BackgroundVideo />
      <section id="inicio">
        <Inicio />
      </section>
      <section id="nosotros">
        <Nosotros />
      </section>
      <section id="servicios">
        <Servicios />
      </section>
      <section id="proyectos">
        <Example />
      </section>
      <section id="contacto">
        <Redes />
      </section>
      <Footer />
    </>
  )
}

export default App
