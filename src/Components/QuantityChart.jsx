import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function QuantityChart({view}) {
    const options = {
        chart: {
          type: 'line'
        },
        title: {
          text: `${view.name.toUpperCase()} quantity history`
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
            name: `${view.name.toUpperCase()} last five quantity changes` ,
            data: view.historyQuantity
          }
        ],
        yAxis: {
          gridLineWidth: 1,
          title: {
            text: 'Quantity by units'
          }
          
        },
        xAxis: {
          tickInterval: 1,
          gridLineWidth: 2,
          // title: {
          //   text: 'Prices changes'
          // },
          accessibility: {
            enabled: true
          },
          categories: ['First time', 'Second time', 'Third time', 'Fourth time', 'Fifth time']
        },
        
       
        
      };
  return (
    <div>
        <div className="diagram">
      <HighchartsReact highcharts={Highcharts}  options={options} />
    </div>
    </div>
  )
}

export default QuantityChart