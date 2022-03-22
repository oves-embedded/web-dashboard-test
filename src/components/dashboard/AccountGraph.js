import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import AppCard from '@crema/core/AppCard';

/**
 * This file the Areachart Graph using rechart.
 * It represents metrics of the 7 months.
 */

// import Data from db.json and render on the chart

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AccountGraph = () => {
  return (
    <AppCard
      title='Sales Today'
      sxStyle={{height: 1}}
      contentStyle={{display: 'flex', flexDirection: 'column'}}
    >
      <ResponsiveContainer width='100%' height={250}>
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
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip labelStyle={{color: 'black'}} />
          <Legend />
          <Area
            type='monotone'
            dataKey='uv'
            stackId='1'
            stroke='#8884d8'
            fill='#8884d8'
          />
          <Area
            type='monotone'
            dataKey='pv'
            stackId='1'
            stroke='#82ca9d'
            fill='#82ca9d'
          />
          <Area
            type='monotone'
            dataKey='amt'
            stackId='1'
            stroke='#4299E1'
            fill='#4299E1'
          />
        </AreaChart>
      </ResponsiveContainer>
    </AppCard>
  );
};

export default AccountGraph;
