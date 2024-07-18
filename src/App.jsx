import React from 'react';
import { useState } from 'react';
import { Card, CardContent, Typography, TextField } from '@mui/material';
import Navbar from './components/Navbar';
import { styled } from '@mui/material/styles';
import './App.css';

const Div = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const App = () => {
  const [name, setName] = useState('John Doe');

  const time = new Date().getHours();
  let greeting = (time < 12) ? 'Morning' : (time < 18) ? 'Afternoon' : 'Evening';
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  return (
      <>
        <Navbar />
        <section className='hero' >
          <div className='content'>
            <Typography variant='h2' component='div'>
            🌍Discover Earth’s Hidden Gems
            </Typography>
            <Typography varient='h6' component='p'>
              Embark on a visual journey through ancient valleys and winding rivers. From mist-shrouded gorges to sun-kissed deltas, our showcase celebrates nature’s masterpieces. Let curiosity guide you—explore the magic of valleys and the rhythmic flow of rivers 🌿📸.
            </Typography>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <TextField id="standard-basic" label="Name" variant="standard" onChange={nameChangeHandler}/> 
                <Div>
                  <Typography variant='h5' component='div'>
                    {name === '' ? `Hey there! Good ${greeting}` : `Good ${greeting} ` + name}
                  </Typography>
                </Div>
              </CardContent>
            </Card>
          </div>
        </section>
      </>
      );
}
export default App
