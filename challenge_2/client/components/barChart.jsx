import React from 'react';
import {Bar, Line} from 'react-chartjs-2';

var BarChart = ({chartData}) => (
  <div className="chart">
      <Bar
	data={chartData}
	options={{
    title: {
      display: true,
      text: "BitCoin Data by Year",
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

export default BarChart;