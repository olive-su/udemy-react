import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); // 가장 큰 값을 상대로 차트가 계산되기 때문에 max값을 따로 구해야하

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
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
