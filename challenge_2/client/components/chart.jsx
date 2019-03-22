import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

var Chart = ({chartData}) => (
  <div className="chart">
      Chart Component
      <Bar
	data={chartData}
	options={{
    title: {
      display: true,
      text: "BitCoin Data 2018",
      fontSize: 25
    },
    legend: {
      display: true,
      position: 'right'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            if(parseInt(value) >= 1000){
              return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
              return '$' + value;
            }
          }
        }
      }]
    }
  }}
/>
<span>Powered by CoinDesk</span>
      </div>
);

export default Chart;