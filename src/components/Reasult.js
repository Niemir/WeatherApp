import React from 'react';
import Sunny from '../img/sunny.png'
import Rain from '../img/rain2.png'
import Cloud from '../img/cloudy.png'

const Reasult = props => {
  const {
    err,
    temp,
    city,
    time,
    weather,
    icon,
    description,
    firstHour,
    firstTemp,
    firstIcon,
    secondHour,
    secondTemp,
    secondIcon,
    thirdHour,
    thirdTemp,
    thirdIcon,
    fourthHour,
    fourthTemp,
    fourthIcon,
    fifthHour,
    fifthTemp,
    fifthIcon,

  } = props.state
  const sunnyStyle = {
    backgroundImage: `url(${Sunny})`,
  }
  const rainStyle = {
    backgroundImage: `url(${Rain})`,
  }
  const cloudStyle = {
    backgroundImage: `url(${Cloud})`,
  }
  const whichWeather = () => {
    if (weather === 'Cloudy') return cloudStyle
    else if (weather === 'Rain') return rainStyle
    else if (weather === 'Clear') return sunnyStyle
  }


  return (
    <>
      {err ? null : (

        <div className='reasult'>

          {/* <h3>{city} </h3> */}
          <p className='temp-p'>{
            Math.floor(temp)}&ordm;</p>
          <p className='discription-p'>{description}</p>
          {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /> */}

          <div className="actual-weather" style={whichWeather()} >
          </div>
          <div className="future-weather">
            <div className="first-weather">
              <div className="hour">
                {firstHour}
              </div>
              <div className="temp">
                {firstTemp}<span>&ordm;</span>
              </div>
              <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${firstIcon}@2x.png`} alt="" />
              </div>
            </div>
            <div className="second-weather">
              <div className="hour">
                {secondHour}
              </div>
              <div className="temp">
                {secondTemp}<span>&ordm;</span>
              </div>
              <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${secondIcon}@2x.png`} alt="" />
              </div>
            </div>
            <div className="third-weather">
              <div className="hour">
                {thirdHour}
              </div>
              <div className="temp">
                {thirdTemp}<span>&ordm;</span>
              </div>
              <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${thirdIcon}@2x.png`} alt="" />
              </div>
            </div>
            <div className="fourth-weather">
              <div className="hour">
                {fourthHour}
              </div>
              <div className="temp">
                {fourthTemp}<span>&ordm;</span>
              </div>
              <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${fourthIcon}@2x.png`} alt="" />
              </div>
            </div>
            <div className="fifth-weather">
              <div className="hour">
                {fifthHour}
              </div>
              <div className="temp">
                {fifthTemp}<span>&ordm;</span>
              </div>
              <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${fifthIcon}@2x.png`} alt="" />
              </div>
            </div>

          </div>

        </div>
      )}

    </>
  );
}

export default Reasult;