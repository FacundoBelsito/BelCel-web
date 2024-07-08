import { AiOutlineClose } from "react-icons/ai"
import './Modal.css'


export const Modal = ( { isOpen, closeModal, description} ) => {

    if (!isOpen) return null

    return (
        <section className="w-full flip-vertical-right">
            <div className="w-full flex justify-end">
                <AiOutlineClose size={ 20 } onClick={ closeModal } cursor={ "pointer" } />
            </div>
            <article className="w-full h-max p-4">
                <p className="desktop:text-2xl tamaño-texto"> { description } </p>
            </article>
        </section>
    )
}