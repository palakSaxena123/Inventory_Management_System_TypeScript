import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const chartaoptions = {
    chart: {
      id: 'apexchart-example',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const [state, setState] = useState({
    series: [
      {
        name: 'Sales',
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: 'Revenue',
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-lg p-5 border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={chartaoptions}
            series={state.series}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
