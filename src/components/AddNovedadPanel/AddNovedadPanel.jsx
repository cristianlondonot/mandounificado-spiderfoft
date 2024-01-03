
import React, {useState} from 'react';
import './AddNovedadPanel.sass';
import FormNovedadReport from '../FormNovedadReport/FormNovedadReport';
import FormTechnicalServices from '../FormTechnicalServices/FormTechnicalServices';

const AddNovedadPanel = () => {
  const [selectedForm, setSelectedForm] = useState('FormNovedadReport'); // Inicializa con el formulario 2 seleccionado

  const handleButtonClick = (form) => {
    setSelectedForm(form);
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative flex flex-col items-center justify-center">
        
        {selectedForm === 'FormNovedadReport' && <FormNovedadReport />}
        {selectedForm === 'TechnicalServices' && <FormTechnicalServices />}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 w-80 min-h-full ">
          <li>
            <details open>
              <summary className='btn-green-dark mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                Reporte de novedades
              </summary>
              <ul>
                <li><a className={selectedForm === 'FormNovedadReport' ? 'active' : ''} onClick={() => handleButtonClick('FormNovedadReport')}>Reportar novedad</a></li>
                <li><a className={selectedForm === 'TechnicalServices' ? 'active' : ''} onClick={() => handleButtonClick('TechnicalServices')}>Asístencia técnica</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddNovedadPanel;