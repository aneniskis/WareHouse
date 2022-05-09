import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



function BarChart({view}) {
  
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: `${view.name.toUpperCase()} price history`
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [
      {
        name: `${view.name.toUpperCase()} last five price changes` ,
        data: view.history
      }
    ],
    yAxis: {
      gridLineWidth: 1,
      title: {
        text: 'Price, (&#8364;)'
      }
      
    },
    xAxis: {
      tickInterval: 1,
      gridLineWidth: 2,
      // title: {
      //   text: 'Prices changes'
      // },
      accessibility: {
        rangeDescription: 'Range: 1 to 5'
      },
      categories: ['First price', 'Second price', 'Third price', 'Fourth price', 'Fifth price']
    },
   
    
  };
  return (
    <div className="diagram">
      <HighchartsReact highcharts={Highcharts}  options={options} />
    </div>
  );
}

export default BarChart;
