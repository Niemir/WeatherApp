import React, { Component } from "react";
import '../styles/App.css';
import Form from './Form.js'
import Reasult from './Reasult.js'


const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes()

class App extends Component {
  state = {
    input: '',
    temp: '',
    err: true,
    city: '',
    time: '',
    weather: '',
    description: '',
    icon: '',
    active: false,
    firstHour: '',
    firstTemp: '',
    secondHour: '',
    secondTemp: '',
    thirdHour: '',
    thirdTemp: '',
    fourthHour: '',
    fourthTemp: '',
    fifthHour: '',
    fifthTemp: '',
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    });
  }
  handleFindCity = (e) => {
    e.preventDefault();

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&APPID=efe58d1c57284f800ce9c6fcec9ddfe0&units=metric&lang=pl`

    const API3h = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.input}&APPID=efe58d1c57284f800ce9c6fcec9ddfe0&units=metric`


    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error('nie ma takiego miasta')
      })
      .then(response => response.json())
      .then(date => {
        this.setState(
          {
            err: false,
            temp: date.main.temp,
            city: this.state.input,
            time: `${hours}:${minutes}`,
            weather: date.weather[0].main,
            description: date.weather[0].description,
            icon: date.weather[0].icon,
            active: true
          }
        )
      })
      .catch(err => {
        alert(`Nie znaleziono miasta ${this.state.input}`)
        this.setState({ err: true });
      })

    fetch(API3h)
      .then(result => {
        if (result.ok) {
          return result
        }
        throw Error('nie ma takiego miasta')
      })
      .then(result => result.json())
      .then(date => {
        console.log(date)
        this.setState({
          firstHour: date.list[0].dt_txt.slice(10, 16),
          firstTemp: Math.floor(date.list[0].main.temp),
          secondHour: date.list[1].dt_txt.slice(10, 16),
          secondTemp: Math.floor(date.list[1].main.temp),
          thirdHour: date.list[2].dt_txt.slice(10, 16),
          thirdTemp: Math.floor(date.list[2].main.temp),
          fourthHour: date.list[3].dt_txt.slice(10, 16),
          fourthTemp: Math.floor(date.list[3].main.temp),
          fifthHour: date.list[4].dt_txt.slice(10, 16),
          fifthTemp: Math.floor(date.list[4].main.temp),
        });
      })
      .catch(err => {
        this.setState({ err: true });
      })
  }
  render() {
    return (
      <div className="App">
        <div className={this.state.active ? 'logo active' : 'logo'}>
          <h1>WeatherApp</h1>
        </div>
        <div className="background"></div>
        <Form
          input={this.state.input}
          change={this.handleInputChange}
          submit={this.handleFindCity}
          active={this.state.active}
        ></Form>
        <Reasult state={this.state}></Reasult>
      </div>
    );
  }
}

export default App;


