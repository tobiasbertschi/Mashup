import logo from './logo.svg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, } from 'react';
import React, { useState } from 'react';


export default function Mainpage() {

  const [joke, setJoke] = useState()
  const [weather, setWeather] = useState()
  const [cat, setCat] = useState()
  const [horoscope, setHoroscope] = useState()
  const [catsrc, setCatsrc] = useState()


  async function fetchFact() {
    const response = await fetch('http://localhost:8080/fact')
      .then(res => res.json())
      .then(data => setJoke(data.data));
  }
  async function fetchWeather() {
    const response = await fetch('http://localhost:8080/weather')
      .then(res => res.json())
      .then(data => setWeather(data));
  }
  async function fetchCat() {
    const response = await fetch('https://cataas.com/cat/gif')
      .then(res => res)
      .then(data => data.blob())
      .then(blob => setCatsrc(blob));
  }

  async function fetchHoroscope() {
    const response = await fetch('http://localhost:8080/horoscope')
      .then(res => res.json())
      .then(data => setHoroscope(data));
  }

  useEffect(() => {
    fetchFact()
    fetchWeather()
    fetchCat()
    fetchHoroscope()
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <Grid container direction="column" justifyContent="center" alignItems="strech">
          <Grid container direction="row" alignItems="center">
            <Grid xs={12}>
              <h1>Bored today?</h1>

            </Grid>
            <Grid xs={6} className="weather">
              <h2>Weather</h2>
              <h3>{Math.round(weather?.main?.temp - 273)}°C</h3>
              <h3>Location: {weather?.name}</h3>
              <h3>Current Weather: {weather?.weather[0]?.main}</h3>
              <h3>Wind: {Math.round(weather?.wind?.speed)}km/h</h3>
            </Grid>
            <Grid xs={6}>
              <h2>Cat</h2>
              {catsrc !== undefined
              ? <img id="image" src={URL.createObjectURL(catsrc)} width="150" height="150"/>
              :<></>}
            </Grid>
          </Grid>
          
          <Grid container direction="row" alignItems="center">
            <Grid xs={12}>
              <h2>Facts</h2>
              <h3> {joke}</h3>
            </Grid>
           
          </Grid>
          <Grid xs={12}  className="horoscope">
            <h2>Horoscope</h2>
            <h3>{horoscope?.description}</h3>
            <h3>lucky time: {horoscope?.lucky_time}</h3>
            <h3>lucky number: {horoscope?.lucky_number}</h3>
            <h3>mood: {horoscope?.mood}</h3>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

