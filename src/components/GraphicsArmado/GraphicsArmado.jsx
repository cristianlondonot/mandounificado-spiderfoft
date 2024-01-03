import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import RangeDate from '../RangeDate/RangeDate';

const data = [
  {
    name: 'GAO',
    '2019-2023': 200,
    '2024-2027': 130,
  },
  {
    name: 'PAB',
    '2019-2023': 250,
    '2024-2027': 190,
  },
  {
    name: 'ELN',
    '2019-2023': 400,
    '2024-2027': 120,
  },
  {
    name: 'GDO',
    '2019-2023': 100,
    '2024-2027': 130,
  },
  {
    name: 'GDCO',
    '2019-2023': 260,
    '2024-2027': 90,
  },
];

const GraphicsArmado = () => {
  return (
    <div className="h-96 w-full p-10">
      <div className="filterDate pb-10">
        <RangeDate />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="2019-2023" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="2024-2027" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicsArmado;