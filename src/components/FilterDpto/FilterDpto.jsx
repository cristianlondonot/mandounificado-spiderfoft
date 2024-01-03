import React, {useState} from 'react'

const FilterDpto = () => {
  const [dptoSelect, setdptoSelect] = useState('');
  const [citySelect, setcitySelect] = useState('');
  const [factorSelect, setfactorSelect] = useState('');
  const [subFactorSelect, setsubFactorSelect] = useState('');
  const [futureZone, setfutureZone] = useState('');

  const handlePrimerSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setdptoSelect(valorSeleccionado);
  };

  const handleSegundoSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setcitySelect(valorSeleccionado);
  };

  const handleTercerSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setfactorSelect(valorSeleccionado);
  };

  const handleCuartoSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setsubFactorSelect(valorSeleccionado);
  };

  const handleQuintoSelectChange = (e) => {
    const valorSeleccionado = e.target.value;
    setfutureZone(valorSeleccionado);
  };
  return (
    <div className="fiters flex gap-4 mb-5 w-full text-green-dark">
      <div className="selectGroup w-full">
        <div className="title">
          <h5 className='text-lg font-semibold'>Departamento</h5>
        </div>
        <select className="select select-bordered select-sm w-full max-w-xs" value={dptoSelect} onChange={handlePrimerSelectChange} defaultValue='INIT'>
          <option value='INIT' disabled>Departamento</option>
          <option value='SANTANDER'>SANTANDER</option>
          <option value='ANTIOQUIA'>ANTIOQUIA</option>
        </select>
      </div>

      <div className="selectGroup w-full text-green-dark">
        <div className="title">
          <h5 className='text-lg font-semibold'>Sub Región</h5>
        </div>
        <select className="select select-bordered select-sm w-full max-w-xs" value={citySelect} onChange={handleSegundoSelectChange} disabled={dptoSelect === ''}>
          <option disabled >Sub Región</option>
          <option>Floridablanca</option>
          <option>Bucaramanga</option>
          <option>Ibague</option>
        </select>
      </div>

      <div className="selectGroup w-full text-green-dark">
        <div className="title">
          <h5 className='text-lg font-semibold'>Atención Priorizada</h5>
        </div>
        <select className="select select-bordered select-sm w-full max-w-xs" value={factorSelect} onChange={handleTercerSelectChange} disabled={citySelect === ''}>
          <option disabled selected>Atención Priorizada</option>
          <option>Economico</option>
          <option>Social</option>
          <option>Armado</option>
        </select>
      </div>

      <div className="selectGroup w-full text-green-dark">
        <div className="title">
          <h5 className='text-lg font-semibold'>PDET</h5>
        </div>
        <select className="select select-bordered select-sm w-full max-w-xs" value={subFactorSelect} onChange={handleCuartoSelectChange} disabled={factorSelect === ''}>
          <option disabled selected>PDET</option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>

      <div className="selectGroup w-full text-green-dark">
        <div className="title">
          <h5 className='text-lg font-semibold'>Zona Futuro</h5>
        </div>
        <select className="select select-bordered select-sm w-full max-w-xs" value={futureZone} onChange={handleQuintoSelectChange} disabled={subFactorSelect === ''}>
          <option disabled selected>Zona Futuro</option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>
      
    </div>
  )
}

export default FilterDpto