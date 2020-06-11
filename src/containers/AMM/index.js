// IMPORTS
import React from 'react';

//material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

//components

import Post from '../../components/Posts/Post';
import RightBar from '../../components/RightBar';
import LeftBar from '../../components/LeftBar';
import TopDestinations from '../../components/TopDestinations';
import Recommendations from '../../components/Recommendations';
import TravellersNearby from '../../components/Posts/Post/TravellersNearby';

const useStyles = makeStyles((theme: Theme) => ({
  containerRoot: {
  	marginTop: theme.spacing(5)
  },
  heading: {
    textAlign: 'center'
  }
}));

const AMM = () => {

	const classes = useStyles();
  	
  	return (
    	<Grid container spacing={3} className={classes.containerRoot}>
            <Grid item xs={12} lg={3} md={3}>
	            <LeftBar />
            </Grid>
            <Grid item xs={12} lg={6} md={6} className={classes.heading}>
	            <TopDestinations />
	            <Recommendations />
	            <Post />
	            <TravellersNearby />
	            <Post />
            </Grid>
            <Grid item xs={12} lg={3} md={3} className={classes.heading}>
            	<RightBar />
            </Grid>
        </Grid> 
  	);
}

export default AMM;
