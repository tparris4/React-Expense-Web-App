import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // transform the datapoints from objects to numbers
  // we'll have an array of 12 values
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // totalMax will receive 12 values which is from our qarray pulled out by the spread operator
  const totalMaximum = Math.max(...dataPointValues);

  return (

    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}

    </div>
  );
};

export default Chart;