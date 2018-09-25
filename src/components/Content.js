import React, { Component } from 'react';

import CityList from './CityList';
import Select from './CitySelect';

import getWeather from '../lib/getWeather';

import '../css/Content.css';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state       = { cities: ['Vancouver']};

    this.addCity     = this.addCity.bind(this);
    this.removeCity  = this.removeCity.bind(this);
  }


  addCity(newCity) {

    //check for weather data, not the best approach
    getWeather(newCity)
    .then(res => {

      if (!this.state.cities.includes(newCity))
      this.setState({
        cities: [...this.state.cities, newCity],
      });

    })
    .catch(err => alert('Please choose another city!'));

  }

  removeCity(removeName) {
    const state = {...this.state};
    const filteredCities = state.cities.filter(name => name !== removeName);
    this.setState({ cities: filteredCities });
  }

  render() {
    return (
      <div className='Content'>
        <Select
        addCity={this.addCity}
        />
        <CityList cities={this.state.cities} removeCity={this.removeCity} addCity={this.addCity}/>
      </div>
    )
  }
}

export default Content;
