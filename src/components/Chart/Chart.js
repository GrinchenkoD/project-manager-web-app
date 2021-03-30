import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['30 Бер', '31 Бер','01 Квіт','02 Квіт'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(150,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [55, 100, 300, 200, 150, 89, 190]
    }
  ]
};


export default class Chart extends Component {
  render() {
      return (
      <div>
        <h2>Line Example</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }
  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}