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
    const response = await fetch('http://localhost:8080/cats')
      .then(res => res)
      .then(data => setCat(data.blob()));
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

  async function makeimage(){
    console.log(cat.data)
    const img = new Image()
    img.src = URL.createObjectURL(cat)
    // newer promise based version of img.onload
    await img.decode()
    
    document.body.append(img)
  

  }


  useEffect(() => {
    console.log(cat)
    makeimage()
  }, [cat]);




  return (
    <div className="App">
      <header className="App-header">
        <Grid container direction="column" justifyContent="center" alignItems="strech">
          <Grid container direction="row" alignItems="center">
            <Grid xs={12} className="weather">
              <h2>Weather</h2>
              <h2>{weather?.main?.temp - 273}</h2>
              <h2>{weather?.name}</h2>
              <h2>{weather?.weather[0]?.main}</h2>
              <h2>{weather?.wind?.speed}</h2>
              <h2>{weather?.wind?.deg}</h2>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid xs={6}>
              <h2>Facts</h2>
              <h2> {joke}</h2>
            </Grid>
            <Grid xs={6}>
              <h2>Cat</h2>
            </Grid>
          </Grid>
          <Grid xs={12}  className="horoscope">
            <h2>Horoscope</h2>
            <h2>{horoscope?.description}</h2>
            <h2>lucky time: {horoscope?.lucky_time}</h2>
            <h2>lucky number: {horoscope?.lucky_number}</h2>
            <h2>mood: {horoscope?.mood}</h2>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

