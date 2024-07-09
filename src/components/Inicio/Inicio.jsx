import './Inicio.css'
import { GoArrowDown } from "react-icons/go";




const Inicio = () => {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center gap-x-10">
      <div className='text-flicker-out-glow div-logo'>
        <img className=" desktop:w-[28rem]  laptop:w-80 logo-del-orto" src="https://i.postimg.cc/xd429bVv/7.png" alt="" />
      </div>
      <div className='text-flicker-out-glow texto-del-orto'>
        <p className="w-74 text-center desktop:mt-16 custom-md:mt-96 desktop:text-5xl laptop:text-4xl text-3xl tracking-widest">TRANSFORMAMOS TUS IDEAS <br /> EN DESARROLLOS WEB</p>
        <div className='flex w-full justify-center text-center'>
          <p className='text-3xl flex gap-x-10 items-center mt-4 tracking-widest'><GoArrowDown className='slide-animation' />BUENOS AIRES<GoArrowDown className='slide-animation' /></p>
        </div>
      </div>

    </main >
  )
}

export default Inicio
