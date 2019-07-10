import React, { Component } from "react";
import '../styles/App.css';
import Form from './Form.js'
import Reasult from './Reasult.js'
import { async } from "q";

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
    icon: '',
    active: false,
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    });
  }
  handleFindCity = (e) => {
    e.preventDefault();

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&APPID=efe58d1c57284f800ce9c6fcec9ddfe0&units=metric`


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
            icon: date.weather[0].icon,
            active: true
          }
        )
      })
      .catch(err => {
        alert(`Nie znaleziono miasta ${this.state.input}`)
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


