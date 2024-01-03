import React, { useState } from 'react';
import './MapSelect.sass';
import SelectMapFixed from '../SelectMapFixed/SelectMapFixed';
import MapCity from '../MapCity/MapCity';
import SelectCityFixed from '../SelectCityFixed/SelectCityFixed';
import MapDpto from '../MapDpto/MapDpto'
import TabTableInfoMap from '../TableInfoMap/TabTableInfoMap';
import MapSelectCity from '../MapSelectCity/MapSelectCity';
import FiltersDpto from '../FiltersDpto/FiltersDpto';

const MenuLeft = () => {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
  const [onDepartamentoChange, setOnDepartamentoChange] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [dptoSelectName, setDptoSelectName] = useState(null);

  const handleSelectChange = (coordinates) => {
    setSelectedCoordinates(coordinates);
  };

  const handleDepartamentoChange = (departamentoData) => {
    setOnDepartamentoChange(departamentoData);
    console.log(departamentoData);
  };

  const hadleDepartamentoName = (dptoName) => {
    setDptoSelectName(dptoName)
  }

  const handleSelectCiudad = (ciudadData) => {
    setCiudadSeleccionada(ciudadData);
    console.log(ciudadData);
  };

  console.log(onDepartamentoChange)
  console.log(ciudadSeleccionada)
  console.log(expanded)
  console.log(dptoSelectName)

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative flex flex-col items-center justify-center">
        {/* <SelectMapFixed onSelectChange={handleSelectChange} setExpanded={setExpanded}  onDepartamentoChange={handleDepartamentoChange} dptoSelectName={dptoSelectName}/>
        <SelectCityFixed actualizarMapa={handleSelectCiudad} setExpanded={setExpanded} onDepartamentoChange={onDepartamentoChange} /> */}
        <FiltersDpto municipio={ciudadSeleccionada.nombre}/>
        <div className="mapFixed relative w-full h-full">
          <MapDpto onSelectCiudad={handleSelectCiudad} />
          <MapSelectCity municipio={ciudadSeleccionada.nombre} />
        </div>

        {/* <MapCity 
          selectedCoordinates={selectedCoordinates}
          onDepartamentoChange={onDepartamentoChange}
          ciudadSeleccionada={ciudadSeleccionada}
          setExpanded={setExpanded}
          expanded={expanded}
          dtptoSelectedName={hadleDepartamentoName}
        /> */}
        <TabTableInfoMap municipio={ciudadSeleccionada.nombre}/>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 w-80 min-h-full ">
          <li>
            <details open>
              <summary className='btn-green-dark'><img className='w-5' src="/img/vector/icon-seguridad.svg" alt="" />Seguridad</summary>
              <ul>
                <li><a>GAO-ELN (Grupo Armado Organizado)</a></li>
                <li><a>Disidencias</a></li>
                <li><a>GAO (Clan del Golfo)</a></li>
                <li><a>GDCO (Grupo Delincuencia Común Organizada)</a></li>
                <li><a>GDO (Grupos Delincuenciales Organizados)</a></li>
                <li><a>Cultivos Ilícitos</a></li>
                <li><a>Laboratorio de Cocaína</a></li>
                <li><a>Explotación Ilícita de Yacimientos Mineros</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary className='btn-green-dark mt-3'><img className='w-5' src="/img/vector/icon-social.svg" alt="" />Social y cultural</summary>
              <ul>
                <li><a>Desescolarización</a></li>
                <li><a>Violencia Intrafamiliar</a></li>
                <li><a>Pobreza Extrema</a></li>
                <li><a>Habitantica en Calle</a></li>
                <li><a>Baja cobertura en salud</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary className='btn-green-dark mt-3'><img className='w-5' src="/img/vector/icon-infraestructura.svg" alt="" />Infraestructura</summary>
              <ul>
                <li><a>Carencia de vías</a></li>
                <li><a>Mantenimiento de vías</a></li>
                <li><a>Carencia de escuelas</a></li>
                <li><a>Mantenimiento de escuelas</a></li>
                <li><a>Carencia de puestos de salud</a></li>
                <li><a>Mantenimiento de puestos de salud</a></li>
                <li><a>Carencia de puentes</a></li>
                <li><a>Carencia de placa huella</a></li>
                <li><a>Construcción de placa huella</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary className='btn-green-dark mt-3'><img className='w-5' src="/img/vector/icon-politicosocial.svg" alt="" />Político institucional</summary>
              <ul>
                <li><a>Problemas Limítrofes</a></li>
                <li><a>Carencia Inspector de Policía</a></li>
                <li><a>Carencia alcalde</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary className='btn-green-dark mt-3'><img className='w-5' src="/img/vector/icon-ambiental.svg" alt="" />Ambiental</summary>
              <ul>
                <li><a>Deforestación</a></li>
                <li><a>Contaminación de las fuentes hídricas</a></li>
                <li><a>Contaminación Atmosférica</a></li>
                <li><a>Amenaza por Deslizamiento</a></li>
                <li><a>Amenaza por Inundación</a></li>
                <li><a>Amenaza por Incendios a la Cobertura Vegetal</a></li>
                <li><a>Actividad sísmica</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary className='btn-green-dark mt-3'><img className='w-5' src="/img/vector/icon-economico.svg" alt="" />Económico</summary>
              <ul>
                <li><a>Disminución de Exportaciones</a></li>
                <li><a>Productividad</a></li>
                <li><a>Informalidad</a></li>
                <li><a>Limitada Tecnología en el campo</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuLeft;
