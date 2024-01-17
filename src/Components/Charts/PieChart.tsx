import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const chartOptions = {
    chart: {
      id: 'apexchart-example',
    },
    labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999'],
    colors: ['#3498db', '#2ecc71', '#3498db', '#2ecc71', '#3498db', '#2ecc71', '#3498db', '#2ecc71', '#3498db', '#2ecc71', '#3498db', '#2ecc71', '#3498db', '#2ecc71'],
  };

  const [state, setState] = useState({
    series: [44, 55, 41, 67, 22, 43, 65, 13, 23, 20, 8, 13, 27, 15],
  });

  return (
    <div className="col-span-12 rounded-lg p-5 border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={chartOptions}
            series={state.series}
            type="pie"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
