// IMPORTS
import React from 'react';
import clsx from 'clsx';

//material UI
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

// components
import TopArticles from '../../components/Articles/TopArticles';



const useStyles = makeStyles((theme: Theme) => ({
  exploreItem: {
    marginBottom: theme.spacing(3),
    position: 'relative'
  },
  shade: {
    position: 'absolute',
    width: '42%',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    opacity: 0.9,
    color: '#fff',
    fontWeight: 700,
    top: 0,
  },
  shadeRight: {
    right: 0,
    background: '#5d3c37',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  shadeLeft: {
    left: 0,
    background: '#df8223',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  exploreImage: {
    borderRadius: 15
  }
}));

const RightBar = () => {

	const classes = useStyles();
  	
  	return (
    	<Box component="div" p={1}>
        <Typography variant="h6">
          Explore the best of myanmar!
        </Typography>

        <Paper elevation={0} className={classes.exploreItem}>
          <CardMedia
            className={classes.exploreImage}
            image="https://content.r9cdn.net/res/images/horizon/seo/common/destinationtiles/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4"
            title="Hotels"
            component="img"
          />
          <Box component="div" className={clsx(classes.shadeRight, classes.shade)}>Hotels</Box>
        </Paper>

        <Paper elevation={0} className={classes.exploreItem}>
          <CardMedia
            className={classes.exploreImage}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNW-RZ9_VhRt2eM74bOtKopZm9xLQgoZAiUqP4GyrV0fNrLS75&usqp=CAU"
            title="Restaurants"
            component="img"
          />
          <Box component="div" className={clsx(classes.shadeLeft, classes.shade)}>Restaurants</Box>
        </Paper>

        <Paper elevation={0} className={classes.exploreItem}>
          <CardMedia
            className={classes.exploreImage}
            image="https://i.pinimg.com/originals/79/a7/50/79a750f3832e67b364cdb69bf57ad352.jpg"
            title="Hotels"
            component="img"
          />
          <Box component="div" className={clsx(classes.shadeRight, classes.shade)}>Attractions</Box>
        </Paper>

        <TopArticles />

      </Box> 
  	);
}

export default RightBar;
