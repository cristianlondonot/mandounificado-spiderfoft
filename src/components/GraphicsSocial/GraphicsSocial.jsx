import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer
} from "recharts";
import ModalOpenMapGraph from "../Modal/ModalOpenMapGraph";

const data = [
  {
    name: 'Carencia de vías',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mante vías',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Carencia de escuelas',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Carencia puestos salud',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Mante puestos salud',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Carencia acueductos',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Carencia de comunicación',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Carencia de puentes',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Construcción placa huella',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Actividad productivas',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Daños al medio ambiente',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const GraphicsArmado = () => {
  return (
    <div className="h-96 w-full">
      <div className="title mb-7 flex items-center justify-between">
        <h4 className="text-xl font-bold flex items-center justify-center gap-2">
          Factor Social
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </h4>
        <div className="btn btn-link">
          <ModalOpenMapGraph />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="#6d67db" stroke="#4139d9" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="#50ce80" stroke="#2acf6a" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraphicsArmado