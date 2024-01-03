
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import RangeDate from "../RangeDate/RangeDate";

const data = [
  {
    name: "0",
    '2019-2023': 0,
    '2024-2027': 0,
    amt: 0
  },
  {
    name: "Cultivos ilícitos",
    '2019-2023': 100,
    '2024-2027': 200,
  },
  {
    name: "Laboratorios",
    '2019-2023': 150,
    '2024-2027': 131,
  },
  {
    name: "Mina ilicita oro",
    '2019-2023': 120,
    '2024-2027': 200,
  },
  {
    name: "Mina ilicita carbón",
    '2019-2023': 30,
    '2024-2027': 31,
  },
  {
    name: "Mina ilicita coltán",
    '2019-2023': 15,
    '2024-2027': 9,
  }
];

function GraphicsEconomico() {
  return (
    <div className="h-96 w-full p-10">
      <div className="filterDate pb-10">
        <RangeDate />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line type="monotone" dataKey="2024-2027" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2019-2023" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphicsEconomico