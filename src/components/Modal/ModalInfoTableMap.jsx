import React from 'react'
import InfoMapTable from '../TableInfoMap/InfoMapTable'

const ModalInfoTableMap = () => {
  return (
    <>
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Información</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Información</h3>
          <InfoMapTable />
          <div className="modal-action">
            <form method="dialog">
              
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default ModalInfoTableMap