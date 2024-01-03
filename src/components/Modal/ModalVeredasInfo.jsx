import React from 'react'
import VerdaMapTable from '../TableInfoMap/VerdaMapTable'

const ModalVeredasInfo = () => {
  return (
    <div>
      <div className="btn btn-sm" onClick={()=>document.getElementById('my_modal_1').showModal()}>Info</div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Información</h3>
          <VerdaMapTable />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default ModalVeredasInfo