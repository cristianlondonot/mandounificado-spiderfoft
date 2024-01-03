import React from 'react'

const FormAddInfo = () => {
  return (
    <div className='w-full h-full p-20'>
      <div className="formTitle mb-12 flex items-center gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <h2 className="text-5xl font-bold">Añadir información</h2>
      </div>
      <div className="grid gap-3 grid-cols-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Nombre la información</span>
            <span className="label-text-alt">(*Obligatorio)</span>
          </div>
          <input type="text" placeholder="Escriba aquí..." className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Seleccione el departamento</span>
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
            <span className="label-text">Seleccione una ciudad</span>
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
            <span className="label-text">Seleccione el departamento</span>
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
            <span className="label-text">Seleccione un factor</span>
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
            <span className="label-text">Seleccione un sub-factor</span>
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
            <span className="label-text">Dirección exacta</span>
            <span className="label-text-alt">(*Obligatorio)</span>
          </div>
          <input type="text" placeholder="Escriba aquí..." className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Coordenadas</span>
            <span className="label-text-alt">(*Opcional)</span>
          </div>
          <input type="text" placeholder="Escriba aquí..." className="input input-bordered w-full" />
        </label>
      </div>
      <div className="px-20 py-5">
        <div className="label">
          <span className="label-text">Adjunte un archivo de excel</span>
          <span className="label-text-alt">(Opcional)</span>
        </div>
        <input type="file" className="file-input file-input-bordered file-input-md w-full" />
      </div>
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

export default FormAddInfo