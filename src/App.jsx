import React, { Component } from 'react';
import './App.css'

import {Route, Switch} from 'react-router-dom';

import {contentData,chartData,users} from './data';
 
import Menu from './components/Menu';
import TopBar from './components/TopBar';
import Content from './components/Content';

import WorkFlow from './components/menu components/Workflow';
import Statistic from './components/menu components/Statistic';
import Calendar from './components/menu components/Calendar';
import Users from './components/menu components/Users';
import Settings from './components/menu components/Settings';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      contentData,
      chartData,
      users
    }
  }

  homeRender = ()=>(
                 <Content contentData={this.state.contentData} chartsData={this.state.chartData} users={this.state.users} />
  )

  render() {
    return (
      <div className="App">
          <div className="menu"><Menu /></div>
          <div className="content">
            <TopBar />
            <Switch>
              <Route path="/Workflow" component={WorkFlow}/>
              <Route path="/Statistic" component={Statistic}/>
              <Route path="/Calendar" component={Calendar}/>
              <Route path="/Users" component={Users}/>
              <Route path="/Settings" component={Settings}/>
              <Route path="/" render={this.homeRender}/>
            </Switch>
          </div>
      </div>
    )
  }
}

export default App;
