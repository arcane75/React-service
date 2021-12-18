import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import runyes from '../../images/runyes.png';
import eighteeth from '../../images/eighteeth.png';
import rextr from '../../images/rextr.png';
const Brand = () => {
    return (
        <Box sx={{ flexGrow: 1, m:5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <img className='img-fluid' src={eighteeth} alt='' />
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <img className='img-fluid' src={runyes} alt='' />
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <img className='img-fluid' src={rextr} alt='' />
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default Brand;