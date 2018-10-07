import React, { Component } from 'react';
import './Message.css';
import reply from '../icons/message/reply.png';
import setting from '../icons/message/setting.png';

class Message extends Component {

    getMessageContent = ()=>{
        const content = this.props.message.content;
        if(content.length>41){
            return content.substring(0,40) + '(...)';
        }
        else{
            return content;
        }
    }

    render(){
        // const senderName = this.props.users[]
        const sender = this.props.users[this.props.message.senderID];
        return(
            <div className={"message-item"+(this.props.message.seen ? "" : " unread")}>
                <div className="avatar-div"><img src={sender.picture} className="picture" alt={'profile pic'} /></div>
                <div className="text-area">
                    <span>
                        <span className="sender-name">{sender.name}</span>
                        <span className="message-received">{this.props.message.time}</span>
                    </span>
                    <div className="message-content">{this.getMessageContent()}</div>
                    <span>
                        <span><img src={reply} className="icons" alt="reply" /></span>
                        <span><img src={setting} className="icons" alt="setting" /></span>                    
                    </span>
                </div>
            </div>
        )
    }
}

export default Message;