import React, { Component } from 'react';
import './Activity.css';
import clock from '../icons/task/clock-black.png';

class Activity extends Component{

    render(){

        const user = this.props.users[this.props.activity.userID];

        return(
                <div className="activity-item">
                    <div className="avatar-div"><div className="vertical-line"></div><img src={user.picture} className="picture" alt="profile pic" /></div>
                    <div className="text-area">
                        <span>
                            <span className="sender-name">{user.name}</span>
                            <span className="activity-title">{this.props.activity.title}</span>&nbsp;
                            <span className="sender-name">{this.props.activity.project}</span>
                        </span>
                        <div className="time-ago">
                            <img src={clock} className='clock-icon' alt='clock' />
                            <span className="time-received">{this.props.activity.time}</span>
                        </div>
                    </div>
                </div>

        )
    }
}

export default Activity;