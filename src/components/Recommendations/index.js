// IMPORTS
import React from 'react';
import TopDestinationsSlider from "react-styled-carousel";
import styled from 'styled-components';

//material UI
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  destinationImage: {
    borderRadius: theme.spacing(1)
  },
  desinationTitle: {
    textAlign: 'left',
    padding: theme.spacing(1),
    fontWeight: 700
  }
}));

// config for slider dots
const customUL = styled.ul`
  & li button {
    font-size: 40px;
    padding: 0;
  }
  & li.fIFxfh button {
    color: #E5E5E5;
  }
  & li.cVnokl button {
    color: #01cad1;
  }
`;

const dest = [1,2,3,4];

const Recommendations = () => {

	const classes = useStyles();
  	
  	return (
    	<Box>
        <Typography variant="h5">
          Recommended for you
        </Typography>
       <TopDestinationsSlider
        cardsToShow={1}
        autoSlide={false}
        showArrows={false}
        showDots={true}
        infinite={false}
        padding="0"
        DotsWrapper={customUL}
      >
        {dest.map((app, key) => (
            <Paper elevation={0} key={key}>
                <CardMedia
                  className={classes.destinationImage}
                  image="https://q-cf.bstatic.com/images/hotel/max1024x768/581/5816920.jpg"
                  title="Restaurants"
                  component="img"
                />
                <Typography variant="h6" className={classes.desinationTitle}>
                  Explore the regency hotel
                </Typography>
            </Paper>
          ))}
      </TopDestinationsSlider> 
      </Box>
  	);
}

export default Recommendations;
