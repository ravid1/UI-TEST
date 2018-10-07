import React, { Component } from 'react';
import  './menu.css';
import logo from '../icons/logo.png';
import home from '../icons/menu/home.png';
import workFlow from '../icons/menu/workflow.png';
import statistic from '../icons/menu/statistic.png';
import calendar from '../icons/menu/calendar.png';
import users from '../icons/menu/users.png';
import settings from '../icons/menu/settings.png';

import { Link } from 'react-router-dom';


class Menu extends Component {

  constructor(props){
    super(props)
    this.state= {
        menuItems:[
            {name:"Home",iconUrl:home},
            {name:"Workflow",iconUrl:workFlow},
            {name:"Statistic",iconUrl:statistic},
            {name:"Calendar",iconUrl:calendar},
            {name:"Users",iconUrl:users},
            {name:"Settings",iconUrl:settings}
          ]
        }

  }

  componentDidMount(){
    const menuItem = document.getElementById('menu0');
    menuItem.classList.add('menu-item-clicked');
  }

  onClickHandler = (index)=>{
    console.log(index);
    const clickedMenuItem = document.getElementById('menu'+index);
    const prevClickedMenuItem = document.querySelector('.menu-item-clicked');
    if(prevClickedMenuItem){
      prevClickedMenuItem.classList.remove('menu-item-clicked');
    }
    if(!clickedMenuItem.classList.contains('menu-item-clicked')){
      clickedMenuItem.classList.add('menu-item-clicked');
    }
  }

  getMenu = ()=> {
    return this.state.menuItems.map((menuItem,index)=>{
        return(
          <Link to={menuItem.name} style={{ textDecoration: 'none' }} className='link ' key={index} >
            <div className="menu-item" id={'menu'+index} key={index} onClick={this.onClickHandler.bind(this,index)}>
            <img src={menuItem.iconUrl} className="icon" alt={menuItem.name} />
            <span >{menuItem.name}</span>
            </div>
            </Link>
          )
    })
  }

  render() {
    const list = this.getMenu();

    return (
      <div>
        <img src={logo} className="logo" alt="Logo"/>
      {list}
      </div>
    );
  }
}

export default Menu;
