import React, { Component }     from 'react';
import PlacesAutocomplete       from 'react-places-autocomplete';

import '../css/CitySelect.css';

export class CitySelect extends Component {

  constructor(props) {
    super(props)
    this.state = { address: '' }

    this.addCity      = this.addCity.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  addCity(address) {
    const city = address.split(',')[0];
    
    this.props.addCity(city);
    this.setState({ address: '' });
  }

  handleChange(address) {
    this.setState({
      address
    })
  }

  render() {
    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: 'Search Places'
    }

    const cssClasses = {
      root: 'form-group',
      input: 'search-input',
      autocompleteContainer: 'autocomplete-container',
    }

    return (
      <div className='CitySelect'>
        <PlacesAutocomplete
          onSelect={this.addCity}
          onEnterKeyDown={this.addCity}
          inputProps={inputProps}
          classNames={cssClasses}
        />
      </div>
    )
  }
}

export default CitySelect;
