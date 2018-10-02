import React, { Component } from 'react';
import './Content.css';
import ContentItem from './ContentItem';

class Content extends Component {

  componentDidMount(){
    console.log(this.props.users);
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

    return (
      <div>
        <div className="content">
          <h1>Hello John!</h1>
        </div>
        <div className='mainContent'>
            {content}
        </div>
      </div>
    )
  }
}

export default Content;
