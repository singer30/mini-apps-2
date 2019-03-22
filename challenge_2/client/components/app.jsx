import React from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import Chart from './chart.jsx'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/bitCoin').then(response => {
      var results = []
      results.push(response.data.bpi['2018-01-01']);
      results.push(response.data.bpi['2018-02-01']);
      results.push(response.data.bpi['2018-03-01']);
      results.push(response.data.bpi['2018-04-01']);
      results.push(response.data.bpi['2018-05-01']);
      results.push(response.data.bpi['2018-06-01']);
      results.push(response.data.bpi['2018-07-01']);
      results.push(response.data.bpi['2018-08-01']);
      results.push(response.data.bpi['2018-09-01']);
      results.push(response.data.bpi['2018-10-01']);
      results.push(response.data.bpi['2018-11-01']);
      results.push(response.data.bpi['2018-12-01']);
      this.setState({
        chartData:{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label:'',
              data: results,
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ]
            }
          ]
        }
      })
    })
  }

  render() {
    return (
      <div>
      hello world
      <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;