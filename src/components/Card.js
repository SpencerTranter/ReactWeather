import React, { Component } from 'react';

import '../css/weather-icons.css';
import '../css/Card.css';

class Card extends Component{
  render() {
    return (
      <div className="Card">
        <div className="Day">
          <p> {this.props.day} </p>
        </div>
          <div className='Weathercon'>
            <i className={this.props.weather}></i>
          </div>
          <div className='TempMain'>
            <p> {this.props.temp[0]}°C </p>
          </div>
        <div className='TempRange'>
          <p className='TempLow'> {this.props.temp[1]}°C </p>
          <p className='TempHigh'> {this.props.temp[2]}°C </p>
        </div>
      </div>
    )
  }
}

export default Card;
