import React, { Component } from 'react';

import CityList from './CityList';
import Select from './CitySelect';

import '../css/Content.css';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state       = { cities: ['Vancouver'], newCity: '' };

    this.addCity     = this.addCity.bind(this);
    this.removeCity  = this.removeCity.bind(this);
  }

  addCity(newName) {
    if (!this.state.cities.includes(newName)) {

      this.setState({ cities: [...this.state.cities, newName], newCity: newName });

    }
  }

  removeCity(removeName) {
    const filteredCities = this.state.cities.filter(name => {
      return name !== removeName;
    });
    this.setState({ cities: filteredCities });
  }

  render() {
    return (
      <div className='Content'>
        <Select
        addCity={this.addCity}
        />
        <CityList cities={this.state.cities} newCity={this.state.newCity} removeCity={this.removeCity} addCity={this.addCity}/>
      </div>
    )
  }
}

export default Content;
