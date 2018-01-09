import React, { Component } from 'react';

import '../css/City.css';

import Weather from './Weather';


class City extends Component {

  constructor(props) {
    super(props);

    this.removeCity = this.removeCity.bind(this);
  }

  removeCity() {
    this.props.removeCity(this.props.name);
  }

  render() {
    return (
      <div className='City container-fluid'>
        <header className="City-header">
          <div className='row'>
            <h1 className='City-title col-md-4'>{this.props.name}</h1>
            <button className='col-md-4' onClick={this.removeCity}>Remove Me!</button>
          </div>
        </header>
        <Weather city={this.props.name}/>
      </div>
    );
  }

}

export default City;
