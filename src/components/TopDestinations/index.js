// IMPORTS
import React from 'react';
import TopDestinationsSlider from "react-styled-carousel";

//material UI
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    paddingLeft: 0,
    marginBottom: theme.spacing(3),
    "& > button": {
      marginTop: 0,
      background: 'transparent',
      borderRadius: "20px",
      background: '#fff',
      width: 25,
      height: 25,
      marginLeft: "-10px",
      border: '1px solid #cccccc'
    },
    "& > button:disabled": {
      display: "none"
    },
    '& > button:before': {
      borderColor: '#01cad1',
      top: 6,
      left: 4
    }
  },
  destinationImage: {
    borderRadius: theme.spacing(1)
  },
  desinationTitle: {
    textAlign: 'left',
    padding: theme.spacing(1),
  },
  destination: {
    borderRadius: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const dest = [1,2,3,4,5,6];

const TopDestinations = () => {

	const classes = useStyles();
  	
  	return (
    	<Box>
        <Typography variant="h5">
          Top Destinations
        </Typography>
       <TopDestinationsSlider
        cardsToShow={4}
        autoSlide={false}
        showDots={false}
        infinite={false}
        padding="0"
        className={classes.slider}
      >
        {dest.map((app, key) => (
            <Paper elevation={0} variant="outlined" key={key} className={classes.destination}>
                <CardMedia
                  className={classes.destinationImage}
                  image="https://study.com/cimages/multimages/16/shwedagon_1.jpg"
                  title="Restaurants"
                  component="img"
                />
                <Typography variant="body2" className={classes.desinationTitle}>
                  The shwedagon pagoda
                </Typography>
            </Paper>
          ))}
      </TopDestinationsSlider> 
      </Box>
  	);
}

export default TopDestinations;
