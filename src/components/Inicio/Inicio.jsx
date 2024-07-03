import './Inicio.css'
import { IoIosArrowDown } from "react-icons/io";


const Inicio = () => {
  return (
    <main className="w-full h-[100vh] flex flex-col">
      <div className="flex gap-x-32 justify-center w-full h-full items-center mb-24">
        <div className='flex flex-col'>
          <div className='static'>
            <img className="slide-in-left w-[28rem] absolute 2xl:top-[14rem]" src="https://raw.githubusercontent.com/BelCel/imagenes/main/11.png" alt="" />
            <div className='mt-72 ml-6 text-center w-full'>
              <p className='text-5xl pb-5 text-flicker-out-glow'>DESING STUDIO</p>
              <p className='text-3xl text-flicker-out-glow mt-2'>C R E A T I V E <br />D E V E L O P E R S</p>
            </div>
          </div>
        </div>
        <div className='text-flicker-out-glow'>
          <p className=" w-74 text-center mt-32 text-5xl tracking-widest">TRANSFORMAMOS TUS IDEAS <br /> EN DESARROLLOS WEB</p>
          <div className='flex w-full justify-center gap-x-10  '>
            <p className='text-3xl flex  items-center mt-4'>B U E N O S A I R E S</p>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Inicio
