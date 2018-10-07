import React, { Component } from 'react';
import './Content.css';
import ContentItem from './ContentItem';
import Chart from './Chart';

class Content extends Component {

  componentDidMount(){
    console.log(this.props);
  }

  getCharts = ()=>{
    return this.props.chartsData.map((item,index)=>{
      return <Chart chartData={item} key={index} />
    });
  }

  getContent = ()=>{
    return this.props.contentData.map((item,index)=>{
      return  <ContentItem title={item.title}
                           notifications={item.notifications}
                           data={item.data}
                           users={this.props.users}
                           key={index} />
    });
  }
  
  render() {
    const content = this.getContent();
    const charts = this.getCharts()

    return (
      <div>
        <div className="content">
          <h1>Hello John!</h1>
        </div>
        <div className='chart-content'>
          {charts}
        </div>
        <div className='mainContent'>
          {content}
        </div>
      </div>
    )
  }
}

export default Content;
