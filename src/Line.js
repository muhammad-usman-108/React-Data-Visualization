import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
class Line extends Component {
  render() {
    return (
      <ReactEcharts
        option={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{ 
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        }}
      />
    );
  }
}
export default Line;