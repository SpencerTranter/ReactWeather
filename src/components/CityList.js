import React, { Component } from 'react';

import City from './City';
import CitySelect from './CitySelect';

class CityList extends Component {

  constructor(props) {
    super(props);
    this.state = { cities: [] };

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

  renderCities() {
    return this.state.cities.map((name, i) => (
      <City
      name={name}
      removeCity={this.removeCity}
      key={i}
      />
    ));
  }

  render() {
    return (
      <div className='CityList'>
        <CitySelect
        addCity={this.addCity}
        />
        <div className='Cities'>
          {this.renderCities()}
        </div>
      </div>
    )
  }
}

export default CityList;
