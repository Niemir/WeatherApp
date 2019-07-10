import React from 'react';
import Sunny from '../img/sunny.png'
import Rain from '../img/rain2.png'
import Cloud from '../img/cloudy.png'

const Reasult = props => {
  const { err, temp, city, time, weather, icon } = props.state
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
          <p className='discription-p'>{weather}</p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />

          <div className="actual-weather" style={whichWeather()} >

          </div>

        </div>
      )}

    </>
  );
}

export default Reasult;