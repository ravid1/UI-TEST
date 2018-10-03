import React, { Component } from 'react';
import './ContentItem.css';
import Task from './Task';
import Message from './Message';
import Activity from './Activity';

class ContentItem extends Component {

    getNotifications = ()=>{
        return this.props.notifications.map((item,index)=>{
            const style = {backgroundColor:item.color}
            return <div className="item-notification" style={style} key={index}>{item.num}</div>
        });
    }

    getData = ()=>{
        switch(this.props.title){
            case 'Tasks':
            return this.props.data.map((item,index)=>{
                return (<Task task={item.title} time={item.time} key={index} />)
            });
            case 'Messages':
            return this.props.data.map((item,index)=>{
                return (<Message message={item} key={index} users={this.props.users}/>)
            });
            case 'Activity':
            return this.props.data.map((item,index)=>{
                return (<Activity activity={item} key={index} users={this.props.users}/>)
            });
            default:
            console.log('error');
            break;
        }
    }
    
    render() {
    return (
      <div className="item">
          <div className="item-header">
            <div className="title">{this.props.title}</div>
            {this.getNotifications()}
          </div>
          <div>                
              {this.getData()}
          </div>
      </div>
    )
  }
}

export default ContentItem;
