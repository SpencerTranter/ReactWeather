import React, { Component } from 'react';
import logo from './logo.svg';

import Content from './components/Content';
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
          <h1 className="App-title">Welcome to Sity</h1>
        </header>
        <Content/>
      </div>
    );
  }
}

export default App;
