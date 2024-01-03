import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.sass'

const handleCloseModal = () => {
  const modal = document.getElementById('modalNovedad');
  modal.close();
};

const ModalNovedad = () => {
  return (
    <>
      <dialog id="modalNovedad" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </form>
          <div className="ioconPrimary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          
          <h3 className="font-bold mt-5 text-lg">¿Estás teniendo algúna dificultad urgente?</h3>
          <p className="pt-4">Comunicate a la linea <strong className='font-bold'><a href=''>300 000 0000</a></strong> o envía un corro a <strong className='font-bold'><a href=''>soporte@estiempo.com</a></strong></p>
          <p className='pb-4'>Si deseas generar el informe respectivo de tu caso, sigue los pasos.</p>
          <div className="modal-action">
            <form method="dialog">
              <Link to={'/addnovedad'} className='btn btn-green-dark me-5' onClick={handleCloseModal}> Si, deseo generar el reporte </Link>
              <button className="btn btn-cancel">No, deseo volver</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default ModalNovedad