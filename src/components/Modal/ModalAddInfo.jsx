import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.sass'

const handleCloseModal = () => {
  const modal = document.getElementById('modalAddInfo');
  modal.close();
};

const ModalAddInfo = () => {
  return (
    <>
      <dialog id="modalAddInfo" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </form>
          <div className="ioconPrimary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25"  stroke="currentColor" className=" ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg mt-5">Estas seguro que deseas añadir nueva información</h3>
          <p className="py-4">La información que vas a añadir, puede generar cambios en las estadisticas municipal, como en la estadistica departamenta y nacional</p>
          <div className="modal-action">
            <form method="dialog">
              <Link to={'/addinfo'} className='btn btn-green-dark me-5' onClick={handleCloseModal}> Si, deseo añadir nuevos datos </Link>
              <button className="btn btn-cancel">No, deseo volver</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default ModalAddInfo