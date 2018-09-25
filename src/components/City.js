import React, { Component } from 'react';

import '../css/City.css';
import Weather from './Weather';

class City extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='City'>
        <div className='CityHeader'>
          <h1 className='CityTitle'>{this.props.name}</h1>
        </div>
        <Weather city={this.props.name}/>
      </div>
    );
  }

}

export default City;
