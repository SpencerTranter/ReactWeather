import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './css/App.css';
import Card from './components/Card';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={ weather: [], days: [], temp: [] };
  }

  componentWillMount() {
    this.GetWeather()
    .then(obj => this.setState({ temp: obj.temp, weather: obj.weather, days: this.CreateDays() }));
  }

  GetWeather() {

  return axios.get('https://api.openweathermap.org/data/2.5/forecast?id=6173331&APPID=4a81689b22153751a2123b1cd9fbc367&units=metric&cnt=7')
      .then((res) => {
        return { weather: res.data.list.map(data => data.weather[0].main), temp: res.data.list.map(data => Math.round(data.main.temp))};
      })
      .catch((error) => {
        console.log(error);
      });

    }

    CreateDays() {
      var day_of_week = new Date().getDay();
      var list = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      var sorted_list = list.slice(day_of_week).concat(list.slice(0,day_of_week));
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.renderCards()}
      </div>
    );
  }
}

export default App;
