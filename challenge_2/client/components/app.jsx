import React from 'react';
import axios from 'axios';
import LineChart from './lineChart.jsx'
import BarChart from './barChart.jsx'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: 'Line',
      year: '2018',
    }
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(`/api/bitCoin/${this.state.year}`).then(response => {
      var year = this.state.year; //adjust server side call to accept a year variable in the request and get back the year. 
      var results = []
      results.push(response.data.bpi[`${year}-01-01`]);
      results.push(response.data.bpi[`${year}-02-01`]);
      results.push(response.data.bpi[`${year}-03-01`]);
      results.push(response.data.bpi[`${year}-04-01`]);
      results.push(response.data.bpi[`${year}-05-01`]);
      results.push(response.data.bpi[`${year}-06-01`]);
      results.push(response.data.bpi[`${year}-07-01`]);
      results.push(response.data.bpi[`${year}-08-01`]);
      results.push(response.data.bpi[`${year}-09-01`]);
      results.push(response.data.bpi[`${year}-10-01`]);
      results.push(response.data.bpi[`${year}-11-01`]);
      results.push(response.data.bpi[`${year}-12-01`]);
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
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    },
    () => this.getData()
    );
  }
  render() {
    if(this.state.view === 'Line') {
      return (
        <div>
        <LineChart chartData={this.state.chartData}/>
        <select onChange={this.handleChange} id="view" >
            <option value="Line">Line</option>
            <option value="Bar">Bar</option>
        </select>
        <select onChange={this.handleChange} id="year" >
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
        </select>
        </div>
      );
    } else {
      return (
        <div>
        <BarChart chartData={this.state.chartData}/>
        <select onChange={this.handleChange} id="view" >
            <option value="Line">Line</option>
            <option value="Bar">Bar</option>
        </select>
        <select onChange={this.handleChange} id="year" >
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
        </select>
        </div>
      );
    }
  }
}

export default App;