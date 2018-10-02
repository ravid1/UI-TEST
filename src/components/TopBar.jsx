import React, { Component } from 'react';
import './TopBar.css';
import hamburgar from '../icons/top bar/hamburger.png'; 
import search from '../icons/top bar/search.png';
import message from '../icons/top bar/message.png'
import notifications from '../icons/top bar/notifications.png'
import profileAvatar from '../icons/top bar/profile-avatar.png'
import polygon from '../icons/top bar/polygon.png'

class TopBar extends Component {

  componentDidMount(){
      const hamburger = document.querySelector('.hamburger-img');
      hamburger.addEventListener('click',(e)=>{
          const menu = document.querySelector('.menu');
          if(!menu.classList.contains('menu-hide')){
              console.log(menu);
              menu.classList.add('menu-hide');
              e.target.classList.add('menu-hided');
          }
          else{
              menu.classList.remove('menu-hide');
              e.target.classList.remove('menu-hided');              
          }
      });
  }
  
  render() {
    return (
        <div className="topBar">
            <div className="hamburger"><img src={hamburgar} className="hamburger-img" alt="hamburger"/></div>
            <div className="search"><img src={search} alt="search"/></div>
            <div className="space"></div>
            <div><input type='button' className='addProject' value='+ Add project' /></div>
            <div className="messages"><img src={message} alt="message"/></div>
            <div className="notifications"><img src={notifications} alt="notifications"/></div>
            <div className="profileAvatar">
                <img src={profileAvatar} className="photo" alt="profile avatar"/>
                <img src={polygon} className="polygon" alt="polygon"/>
            </div>

        </div>
    )
  }
}

export default TopBar;
