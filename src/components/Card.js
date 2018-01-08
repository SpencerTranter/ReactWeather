import React, { Component } from 'react';
import '../css/weather-icons.css';
import '../css/Card.css';

class Card extends Component{
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="Card">
        <div className="Day Column">
          <p> {this.props.day} </p>
        </div>
        <div className='Icon Column'>
          <i className={this.props.weather}></i>
        </div>
        <div className='Temp Column'>
          <p> {this.props.temp} </p>
        </div>
      </div>
    )
  }
}

export default Card;
