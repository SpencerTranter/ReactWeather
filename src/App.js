import React, { Component } from 'react';
import logo from './logo.svg';
import  { Icon, Card } from 'antd';

import CityList from './components/CityList';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sity</h1>
        </header>
        <CityList/>
      </div>
    );
  }
}

export default App;
