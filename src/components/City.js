import React, { Component } from 'react';
import axios  from 'axios';

import config from '../data/config.json';
import Card   from './Card';
import '../css/City.css';

const getWeather = (name) => {

  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&APPID=${config.weatherKey}&units=metric&cnt=7`)
    .then((res) => {
      console.log(res);
      return { weather: res.data.list.map(data => data.weather[0].main), temp: res.data.list.map(data => Math.round(data.main.temp))};
    })
    .catch((error) => {
      console.log(error);
    });

}

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

    this.removeCity = this.removeCity.bind(this);
  }

  removeCity() {
    this.props.removeCity(this.props.name);
  }

  componentDidMount() {
    getWeather(this.props.name)
    .then(obj => this.setState({ temp: obj.temp, weather: obj.weather, days: createDays() }))
    .catch(err => alert('Error'));
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
      <div className='City'>
        <header className="City-header">
          <h1 className="City-title">{this.props.name}</h1>
        </header>
        <button onClick={this.removeCity}>Remove Me!</button>
        {this.renderCards()}
      </div>
    );
  }

}

export default City;
