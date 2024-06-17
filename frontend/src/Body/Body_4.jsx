import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Body_4() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <form>
      <Grid
        data-aos="fade-up"
        container
        component="main"
        sx={{
          height: '100vh',
          marginTop: '150px',   
          marginBottom: '20px', 
        }}
      >
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(https://media.istockphoto.com/id/1417355465/photo/portrait-of-a-smiling-asian-businesswoman-standing-with-arms-folded-and-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=dm121YYIXmq6Cpmf6OFBueKS_11BBzVt03T3KMpHWBo=)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100%',
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box 
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
           <h1 className='hh text-2xl font-a_3' >"At Quick Helper, we're on a mission to simplify your life by providing a seamless and 
            efficient platform for booking skilled technicians. Our journey began with a dedication to
             bridging the gap between individuals and the experts they need to solve everyday technical challenges. 
             With a team of experienced professionals and a commitment to excellence, we've created a user-friendly platform that 
             connects you with the right technicians, from electricians to IT specialists. Our goal is to make your experience effortless,
              so you can focus on what matters
             most while we take care of your technical needs. Discover a hassle-free way to find and book technicians with Quick Helper today."
             </h1>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default Body_4;

