import axios  from 'axios';
import config from '../data/config.json';

const getWeather = (name) => new Promise((resolve, reject) => {

  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&APPID=${config.weatherKey}&units=metric&cnt=7`)
  .then((res) => {

    const weather = res.data.list.map(data => data.weather[0].main);
    const temp = res.data.list.map(data => [Math.round(data.main.temp), Math.floor(data.main.temp_min), Math.ceil(data.main.temp_max)]);
    resolve({ weather, temp });

  })
  .catch((err) => reject(err));

});

export default getWeather;
