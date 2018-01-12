import React, { Component } from 'react';
import { Row, Col } from 'antd';

import '../css/weather-icons.css';
import '../css/Card.css';

class Card extends Component{
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="Card">
        <div className="Day">
          <p> {this.props.day} </p>
        </div>
        <div className='Weathercon'>
          <i className={this.props.weather}></i>
        </div>
        <div className='Temp'>
          <p> {this.props.temp} </p>
        </div>
      </div>
    )
  }
}

export default Card;
