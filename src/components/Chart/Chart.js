import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
// import db from '../../pages/TasksPage/db.json';

const data = {
  labels: ['Планування', '31 Бер', '01 Квіт', '02 Квіт'],
  datasets: [
    {
      label: 'Запланований залишок трудовитрат',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(255,0,0,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255,0,0,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'Актуальний залишок трудовитрат',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(18,47,170,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(18,47,170,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(18,47,170,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [55, 100, 300, 200, 150, 89, 190],
    },
  ],
};
// const getFilteredData = () => {
//   console.log(db);
//   const hoursPlaned = db.map(item => item.hoursPlanned).reduce((acc, item) => {
//     acc += item;
//     return acc;
//     console.log( acc);
//   }, 0);

//   console.log(hoursPlaned);
//   console.log(db.map(item => item));
// }
// getFilteredData();

export default class Chart extends Component {
  render() {
    return (
      <div>
        <h2>1-st Sprint of 1-st project</h2>
        <button>x</button>
        <Line ref="chart" data={data} />
      </div>
    );
  }
  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
