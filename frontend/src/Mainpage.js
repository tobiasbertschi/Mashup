import logo from './logo.svg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, } from 'react';
import React, { useState } from 'react';


export default function Mainpage() {

  const [joke, setJoke] = useState()
  const [weather, setWeather] = useState()
  const [cat, setCat] = useState()


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
    const response = await fetch('  http://placekitten.com/g/200/300')
    .then(res => res)
    .then(data => setCat(data.body));
  }

  useEffect(() => {
    fetchFact()
    fetchWeather()
    fetchCat()
  },[]);

  useEffect(() => {
    console.log(weather)
  },[weather]);

  useEffect(() => {
    console.log(cat)
  },[cat]);



  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello to our Mashup</h1>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={4}>
                <Paper>
                  <h2>Weather</h2>
                  <h2>{weather?.main?.temp - 273}</h2>
                  <h2>{weather?.name}</h2>
                  <h2>{weather?.weather[0]?.main}</h2>
                  <h2>{weather?.wind?.speed}</h2>
                  <h2>{weather?.wind?.deg}</h2>
                </Paper>
            </Grid>
            <Grid xs={12}></Grid>
            <Grid xs={6}>
                <Paper>
                  <h2>Facts</h2>
                  <h2> {joke}</h2>
                </Paper>
            </Grid>
            <Grid xs={6}>
                <Paper><h2>Horoscope</h2></Paper>
            </Grid>
            <Grid xs={6}>
                <Paper><h2>Cat</h2></Paper>
            </Grid>
        </Grid>
      </header>
    </div>
  );
}

