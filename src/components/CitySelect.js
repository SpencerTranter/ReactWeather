import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';

import '../css/react-select.css';
import '../css/CitySelect.css';

const DATA = require('../data/cities');

class CitySelect extends Component {

  constructor(props) {
    super(props);
    this.state = { selectValue: '' }

    this.addCity      = this.addCity.bind(this);
    this.clearForm    = this.clearForm.bind(this);

  }

  clearForm () {

    this.setState({ selectValue: '' });

  }

  addCity(address) {

    if (address !== null) {

      this.props.addCity(address);
      this.setState({ selectValue: address });

    }
    else this.clearForm();

  }

  render () {
		var options = DATA.CITIES;
		return (
      <div className="SelectContainer">
  		<VirtualizedSelect ref="citySelect"
  			options={options}
  			simpleValue
  			clearable
  			name="select-city"
  			value={this.state.selectValue}
  			onChange={this.addCity}
        onFocus={this.clearForm}
  			searchable
  			labelKey="name"
  			valueKey="name"
        placeholder="Select A City!"
  		/>
      </div>
		);
	}

}

export default CitySelect;
