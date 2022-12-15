import logo from './logo.svg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Mainpage() {

    


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello to our Mashup</h1>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={4}>
                <Paper><h2>Weather</h2></Paper>
            </Grid>
            <Grid xs={12}></Grid>
            <Grid xs={6}>
                <Paper><h2>Facts</h2></Paper>
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

