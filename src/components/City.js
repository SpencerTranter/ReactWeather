import React, { Component } from 'react';
import axios  from 'axios';

import config from '../config.json';
import Card   from './Card';
import '../css/City.css';

class City extends Component {

  constructor(props) {
    super(props);
    this.state={ weather: [], days: [], temp: [] };
  }

  componentWillMount() {
    this.GetWeather()
    .then(obj => this.setState({ temp: obj.temp, weather: obj.weather, days: this.CreateDays() }));
  }

  GetWeather() {

  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=6173331&APPID=${config.weatherKey}&units=metric&cnt=7`)
      .then((res) => {
        return { weather: res.data.list.map(data => data.weather[0].main), temp: res.data.list.map(data => Math.round(data.main.temp))};
      })
      .catch((error) => {
        console.log(error);
      });

    }

    CreateDays() {
      const day_of_week = new Date().getDay();
      const list        = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      const sorted_list = list.slice(day_of_week).concat(list.slice(0,day_of_week));
      return list.sort(function(a,b) { return sorted_list.indexOf(a) > sorted_list.indexOf(b); });
    }

  renderCards() {
    const weatherIcons = { Sun: 'wi wi-day-sunny', Rain: 'wi wi-showers', Cloud: 'wi wi-cloudy' };
    return this.state.days.map((day, i) => (
      <Card key={day} day={day} weather={weatherIcons[this.state.weather[i]]} temp={this.state.temp[i]}/>
    ))

  }

  render() {
    return (
      <div className='City'>
        <header className="City-header">
          <h1 className="City-title">Welcome to City</h1>
        </header>
        {this.renderCards()}
      </div>
    );
  }

}

export default City;
