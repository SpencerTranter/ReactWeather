import React, { Component } from 'react';

import CityList from './CityList';
import CitySelect from './CitySelect';

import '../css/Content.css';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state       = { cities: ['Vancouver'] };

    this.addCity     = this.addCity.bind(this);
    this.removeCity  = this.removeCity.bind(this);
  }

  addCity(newName) {
    this.setState({ cities: [...this.state.cities, newName] });
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
        <div>
        </div>
        <CitySelect
        addCity={this.addCity}
        />
        <CityList cities={this.state.cities} removeCity={this.removeCity} addCity={this.addCity}/>
      </div>
    )
  }
}

export default Content;
