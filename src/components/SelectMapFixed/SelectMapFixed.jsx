// SelectMapFixed.jsx
import React, { useEffect, useState } from 'react';
import './SelectMapFixed.sass';
import jsonData from '../../../data.json';

const SelectMapFixed = ({ onSelectChange, onDepartamentoChange, setExpanded, dptoSelectName }) => {
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState('');
  const [departamentoUnicos, setDepartamentoUnicos] = useState([]);

  useEffect(() => {
    // Filtrar los departamentos
    const departamentos = jsonData.map((item) => item['Nombre Departamento']);

    // Eliminar departamentos duplicados
    const departamentosUnicos = [...new Set(departamentos)];

    // Establecer departamentos únicos
    setDepartamentoUnicos(departamentosUnicos);
  }, []);

  const handleChange = (event) => {
    const nuevoDepartamento = event.target.value;

    setDepartamentoSeleccionado(nuevoDepartamento);

    const dptoData = jsonData.find(
      (item) => item['Nombre Departamento'] === nuevoDepartamento
    );

    if (dptoData) {
      const dptoSelect = {
        nombre: dptoData['Nombre Departamento'],
        coordenadas: {
          latitude: parseFloat(dptoData.Latitud.replace(',', '.')),
          longitude: parseFloat(dptoData.Longitud.replace(',', '.')),
        },
      };

      onSelectChange(dptoSelect);
      setExpanded(true);
      onDepartamentoChange(dptoSelect);
    }
  };

  console.log(dptoSelectName)
  return (
    <select
      className="select selectMapFixed select-bordered w-full max-w-xs z-10"
      value={departamentoSeleccionado ? departamentoSeleccionado : (dptoSelectName === '' ? '' : dptoSelectName)}
      /* defaultValue={departamentoSeleccionado ? departamentoSeleccionado : (dptoSelectName === '' ? '' : dptoSelectName)} */
      onChange={handleChange}
    >
      <option value='' disabled>Selecciona un departamento</option>
      {departamentoUnicos.map((dpto, index) => (
        <option key={index} value={dpto}>
          {dpto}
        </option>
      ))}
    </select>
  );
};

export default SelectMapFixed;
