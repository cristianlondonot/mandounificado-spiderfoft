import React, { useState, useEffect } from 'react';
import jsonData from '../../../data.json';
import './SelectCityFixed.sass';

let nombreDepartamentoGlobal = '';

const SelectCityFixed = ({ actualizarMapa, setExpanded, onDepartamentoChange }) => {
  const [selectedMunicipio, setSelectedMunicipio] = useState('Bucaramanga');
  const [municipiosUnicos, setMunicipiosUnicos] = useState([]);


  if (onDepartamentoChange && onDepartamentoChange.nombre) {
    nombreDepartamentoGlobal = onDepartamentoChange.nombre;
    console.log(nombreDepartamentoGlobal);
  } else {
    console.error('Seleccione un departamento');
  }

  console.log(onDepartamentoChange);

  useEffect(() => {
    const municipiosDelDepartamento = jsonData.filter(
      (item) => item['Nombre Departamento'] === nombreDepartamentoGlobal
    );

    // Elimina municipios duplicados
    const uniqueMunicipios = municipiosDelDepartamento.reduce((uniqueMunicipios, municipio) => {
      const nombreCiudad = municipio['Nombre Municipio'];

      // Verifica si la ciudad ya está en el nuevo array
      const existeCiudad = uniqueMunicipios.some(
        (item) => item['Nombre Municipio'] === nombreCiudad
      );

      if (!existeCiudad) {
        uniqueMunicipios.push(municipio);
      }

      return uniqueMunicipios;
    }, []);

    // Establece los municipios únicos en el estado
    setMunicipiosUnicos(uniqueMunicipios);
  }, [onDepartamentoChange]);

  const handleSelectChange = (event) => {
    const municipioSeleccionado = event.target.value;
    setSelectedMunicipio(municipioSeleccionado);

    const municipioData = municipiosUnicos.find(
      (item) => item['Nombre Municipio'] === municipioSeleccionado
    );

    if (municipioData) {
      const ciudadSeleccionada = {
        nombre: municipioData['Nombre Municipio'],
        coordenadas: {
          latitude: parseFloat(municipioData.Latitud.replace(',', '.')),
          longitude: parseFloat(municipioData.Longitud.replace(',', '.')),
        },
      };

      actualizarMapa(ciudadSeleccionada);
      setExpanded(true); // Aquí activa setExpanded del Componente_1
    }
  };

  return (
    <div>
      <select
        className="selectCity capitalize select select-bordered w-full max-w-xs z-10"
         // Deshabilita el select si no hay un departamento seleccionado
        disabled={nombreDepartamentoGlobal === ''}
        value={selectedMunicipio}
        onChange={handleSelectChange}
      >
        <option value="">Seleccione un municipio</option>
        {municipiosUnicos.map((municipio, index) => (
          <option className="capitalize" key={index} value={municipio['Nombre Municipio']}>
            {municipio['Nombre Municipio']}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCityFixed;
