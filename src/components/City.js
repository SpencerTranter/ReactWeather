import React, { Component } from 'react';
import { Icon, Row, Col, Layout, Button } from 'antd';

import '../css/City.css';

import Weather from './Weather';

const { Content } = Layout;

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
      <Row justify='center' className='City'>
        <Col  span={3} className='CityOutter'></Col>

        <Col  span={18} className='CityInner'>
          <div className='CityHeader'>
            <Row justify='right'>
              <Col  span={1}>
                <Button type='normal' size='small' shape='circle'>
                  <Icon type="close" onClick={this.removeCity}/>
                </Button>
              </Col>
            </Row>
            <Row justify='center'>
              <Col span={24}>
                <h1 className='CityTitle'>{this.props.name}</h1>
              </Col>
            </Row>
          </div>

          <Content >
            <Weather city={this.props.name}/>
          </Content>
        </Col>

        <Col  span={3} className='CityOutter'></Col>
      </Row>
    );
  }

}

export default City;
