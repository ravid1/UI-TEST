import React, { Component } from 'react';
import './Task.css';
import clockBlack from '../icons/task/clock-black.png';
import clockRed from '../icons/task/clock-red.png';
import options from '../icons/task/options.png';

class Task extends Component {

    getTimeText = ()=>{
        const delay = this.props.time.indexOf('delays')!==-1 ? true : false;
        if(delay){
            return (<div className="task-time-delay">
                    <img src={clockRed} className='clock-icon' alt='clock' />
                    {this.props.time}
                    </div>)
        }
        else{
            return (<div className="task-time">
                    <img src={clockBlack} className='clock-icon' alt='clock' />
                    {this.props.time}
                    </div>)
        }
    }

    render(){
        return(
            <div className="task-item">
                <div className="task-avatar">{this.props.task.substring(0,1)}</div>
                <div className="task-text-area">
                    <span><div className="task-description">{this.props.task}</div></span>
                    {this.getTimeText()}                 
                </div>
                <div>
                    <img src={options} className='task-options' alt='options' />
                </div>
            </div>
        )
    }
}

export default Task;