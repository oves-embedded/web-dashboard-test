import React from 'react';
import AppCard from '@crema/core/AppCard';
import GaugeChart from 'react-gauge-chart';

const Gauge = () => {
  return (
    <AppCard title='Gauge' sxStyle={{height: 1}}>
      <GaugeChart
        id='gauge-chart2'
        nrOfLevels={20}
        percent={0.86}
        textColor='#000'
        hideText={false}
      />
    </AppCard>
  );
};

export default Gauge;
