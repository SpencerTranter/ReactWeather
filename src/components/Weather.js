import React, { Component } from 'react';
import Card   from './Card';
import getWeather from '../lib/getWeather';

import '../css/Weather.css';


const createDays = () => {

  const day_of_week = new Date().getDay();
  const list        = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const sorted_list = list.slice(day_of_week).concat(list.slice(0,day_of_week));
  return list.sort(function(a,b) { return sorted_list.indexOf(a) > sorted_list.indexOf(b); });

}

class City extends Component {

  constructor(props) {

    super(props);

    this.state={ weather: [], days: [], temp: [] };

  }

  componentDidMount() {
    getWeather(this.props.city)
    .then(obj => this.setState({ temp: obj.temp, weather: obj.weather, days: createDays() }))
  }

  renderCards() {

    const weatherIcons = {
      Clear: 'day-sunny',
      Rain: 'rain',
      Drizzle: 'showers',
      Clouds: 'cloudy',
      Snow: 'snow',
      Atmosphere: 'fog' ,
      Thunderstorm: 'thunderstorm'
    };
    return this.state.days.map((day, i) => {

      const icon = `wi wi-${weatherIcons[this.state.weather[i]]}`;
      return (
        <Card key={day} day={day} weather={icon} temp={this.state.temp[i]}/>
      )

    });

  }

    render() {
      return (
        <div className='Weather'>
          <div className='WeatherCards'>
            {this.renderCards()}
          </div>
        </div>
      );
    }

  }

  export default City;
