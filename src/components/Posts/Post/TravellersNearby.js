// IMPORTS
import React from 'react';

//material UI
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

// icons
import UserProfileIcon from '../../../assets/header-icons/icon-user-profile-pic.png';

const useStyles = makeStyles((theme: Theme) => ({
  TravellersNearbyRoot: {
  	height: theme.spacing(25),
  	marginBottom: theme.spacing(3),
    background: '#e8a21b',
  },
  head: {
    display: 'flex'
  },
  title: {
    marginLeft: 0,
    color: '#fff',
    fontWeight: 700
  },
  viewAllButton: {
    marginRight: 0,
    marginLeft: 'auto',
    background: '#fff'
  },
  users: {
    display: 'flex'
  },
  user: {
    margin: theme.spacing(2.5),
    width: 80,
    height: 80
  }
}));

const TravellersNearby = () => {

	const classes = useStyles();
  	
  	return (
          <Paper variant="outlined" className={classes.TravellersNearbyRoot}>
            <Box p={1} className={classes.head}>
              <Typography variant="h6" className={classes.title}>
                Travellers Nearby
              </Typography>
              <Button variant="contained" className={classes.viewAllButton}>View All</Button> 
            </Box>
            <Box className={classes.users}>
              <Avatar className={classes.user} src="https://static.intercomassets.com/avatars/3332512/square_128/Screenshot_2020-04-11_at_10.51.00-1586591829.png?1586591829" />
              <Avatar className={classes.user} src="https://static.intercomassets.com/avatars/3332512/square_128/Screenshot_2020-04-11_at_10.51.00-1586591829.png?1586591829" />
              <Avatar className={classes.user} src="https://static.intercomassets.com/avatars/3332512/square_128/Screenshot_2020-04-11_at_10.51.00-1586591829.png?1586591829" />
              <Avatar className={classes.user} src="https://static.intercomassets.com/avatars/3332512/square_128/Screenshot_2020-04-11_at_10.51.00-1586591829.png?1586591829" />
              <Avatar className={classes.user} src="https://static.intercomassets.com/avatars/3332512/square_128/Screenshot_2020-04-11_at_10.51.00-1586591829.png?1586591829" />
            </Box> 
          </Paper>        
  	);
}

export default TravellersNearby;
