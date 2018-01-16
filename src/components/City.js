import React, { Component } from 'react';
import { Icon, Button } from 'antd';

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
      <div className='City'>
        <div className='CityHeader'>
          <div className='HeaderButton'>
            <Button type='normal' size='small' shape='circle' onClick={this.removeCity}>
              <Icon type="close" />
            </Button>
          </div>
          <div className='HeaderTitle'>
            <h1 className='CityTitle'>{this.props.name}</h1>
          </div>
        </div>
        <Weather removeCity={this.removeCity} city={this.props.name}/>
      </div>
    );
  }

}

export default City;
