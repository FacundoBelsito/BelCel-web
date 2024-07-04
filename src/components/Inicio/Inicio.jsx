import './Inicio.css'
import { IoIosArrowDown } from "react-icons/io";


const Inicio = () => {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <div className="flex gap-x-32 justify-center w-full h-full items-center mb-24">
        <div className='flex flex-col'>
          <div className='static'>
            <img className="slide-in-left desktop:w-[28rem] absolute desktop:top-[14rem] laptop:w-80 logo-del-orto" src="https://raw.githubusercontent.com/BelCel/imagenes/main/11.png" alt="" />
            <div className='mt-72 desktop:ml-6 laptop:ml-14 text-center w-full creative'>
              <p className='desktop:text-5xl laptop:text-4xl desktop:pb-5 text-flicker-out-glow studio '>DESING STUDIO</p>
              <p className='desktop:text-3xl text-flicker-out-glow mt-2'>C R E A T I V E <br />D E V E L O P E R S</p>
            </div>
          </div>
        </div>
        <div className='text-flicker-out-glow mt-10 texto-del-orto'>
          <p className="w-74 text-center mt-32 desktop:text-5xl laptop:text-4xl text-3xl tracking-widest">TRANSFORMAMOS TUS IDEAS <br /> EN DESARROLLOS WEB</p>
          <div className='flex w-full justify-center gap-x-10'>
            <p className='text-3xl flex  items-center mt-4'>B U E N O S A I R E S</p>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Inicio
