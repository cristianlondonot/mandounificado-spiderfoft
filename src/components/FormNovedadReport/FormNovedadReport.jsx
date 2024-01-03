import React from 'react'

const FormNovedadReport = () => {
  return (
    <div className='w-full h-full p-20'>
      <div className="formTitle mb-12 flex items-center gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
        <h2 className="text-5xl font-bold">Resporte de novedad</h2>
      </div>
      <div className="grid gap-3 grid-cols-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Nombre completo</span>
            <span className="label-text-alt">(*Obligatorio)</span>
          </div>
          <input type="text" placeholder="Nombre..." className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
            <span className="label-text-alt">(*Obligatorio)</span>
          </div>
          <input type="text" placeholder="Nombre..." className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Seleccione el tipo de novedad</span>
            <span className="label-text-alt">(*Obligatorio)</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Otro</span>
            <span className="label-text-alt">(*Obligatorio)</span>
          </div>
          <input type="text" placeholder="Tipo de novedad" className="input input-bordered w-full" />
        </label>
      </div>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Describe la novedad que deseas reportar</span>
          <span className="label-text-alt">(los más detallado posible)</span>
        </div>
        <textarea className="textarea textarea-bordered h-24" placeholder="Descripción"></textarea>
      </label>
      <div className="btn-action flex justify-center">
        <button className="btn w-96 mt-9">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
          </svg>
          Guardar información
        </button>
      </div>
    </div>
  )
}

export default FormNovedadReport