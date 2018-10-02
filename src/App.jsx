import React, { Component } from 'react';
import './App.css'
// import Content from './components/Content';

import {data,users} from './data';

// import alex from './icons/users/alex.png';
// import alexandra from './icons/users/alexandra.png';
// import james from './icons/users/james.png';
// import nina from './icons/users/nina.png';
 
import Menu from './components/Menu';
import TopBar from './components/TopBar';
import Content from './components/Content';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      contentData : data,
      users : users
    }
  }

  componentDidMount(){
    console.log(data);
  }
  
  render() {
    return (
      <div className="App">
          <div className="menu"><Menu /></div>
          <div className="content">
            <TopBar />
            <Content contentData={this.state.contentData} users={this.state.users} />
          </div>
      </div>
    )
  }
}

export default App;
