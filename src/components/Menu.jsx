import React, { Component } from 'react';
import  './menu.css';
import logo from '../icons/logo.png';
import home from '../icons/menu/home.png';
import workFlow from '../icons/menu/workflow.png';
import statistic from '../icons/menu/statistic.png';
import calendar from '../icons/menu/calendar.png';
import users from '../icons/menu/users.png';
import settings from '../icons/menu/settings.png';


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

getMenu = ()=> {
  return this.state.menuItems.map((menuItem,index)=>{
      return(<div className="menu-item" key={index}>
          <img src={menuItem.iconUrl} className="icon" alt={menuItem.name} />
          <span>{menuItem.name}</span>
      </div>)
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
