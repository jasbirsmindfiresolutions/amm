// IMPORTS
import React from 'react';
import clsx from 'clsx';

//material UI
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    marginBottom: theme.spacing(1)
  },
  heading: {
    marginLeft: 0
  },
  filter: {
    marginRight: 0,
    marginLeft: 'auto',
    display: 'flex',
    alignSelf: 'center'
  },
  filterActive: {
    color: '#10d0d3'
  },
  excerpt: {
    textAlign: 'left',
    fontWeight: 700
  },
  postFoot: {
    display: 'flex'
  },
  postFootLikes: {
    marginLeft: 0,
    display: 'flex'
  },
  postFootShares: {
    marginRight: 0,
    marginLeft: 'auto'
  },
  divider: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: 2
  }
}));

const Explore = () => {

	const classes = useStyles();
  	
  	return (
    	<Paper elevation={0}>
        
        <Box className={classes.header}>
            <Box className={classes.heading}>
              <Typography variant="h6">
                Top Articles
              </Typography>
            </Box>
            <Box className={classes.filter}>
              <Typography variant="body1" display="inline" className={classes.filterActive}>
                Recent
              </Typography>
              <Divider orientation="vertical" flexItem className={classes.divider} />
              <Typography variant="body1" display="inline">
                Popular
              </Typography>
            </Box>
        </Box>

        <CardMedia
            className={classes.exploreImage}
            image="https://images.odysseytours.net/article/15000/one-leg-rowers_14635.jpg"
            title="Inle lake"
            component="img"
          />

        <Box p={1} className={classes.excerpt}>
          Grand view at the inle lake: A must visit in myanmar
        </Box> 

        <Divider />

        <Box p={1} className={classes.postFoot}>
          <Box className={classes.postFootLikes}>
            <Typography variant="caption">
              500 Views | 15 Shares
            </Typography>
          </Box>
          <Box className={classes.postFootShares}>
            <Typography variant="caption">
              24/04/2020
            </Typography>
          </Box>
        </Box>

      </Paper> 
  	);
}

export default Explore;
