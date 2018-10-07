import React, { Component } from 'react';
import './Chart.css';
import arrow from '../icons/angle-arrow-down.svg';

class Chart extends Component {
    render() {
      return (
            <div className="chart-item">
                <div className="top-area">
                    <h3 className="title-text">{this.props.chartData.title}</h3>
                    <span className="chart-time">
                        <span className='time-text'>period:</span>
                        <span className='period-text'>last year</span>
                        <img className="arrow-icon" src={arrow} alt="arrow"/>
                                                 </span>
                </div>
                <div className="chart-image"><img src={this.props.chartData.icon} className="chart-image" alt='chart' /></div>    
            </div>    
      );
    }
  }
  
  export default Chart;