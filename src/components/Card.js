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
        <Row className="Day">
          <Col span={24}>
          <p> {this.props.day} </p>
          </Col>
        </Row>
        <Row className='Weathercon'>
          <Col span={24}>
          <i className={this.props.weather}></i>
          </Col>
        </Row>
        <Row className='Temp'>
          <Col span={24}>
          <p> {this.props.temp} </p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Card;
