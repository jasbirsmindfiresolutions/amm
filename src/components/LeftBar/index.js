// IMPORTS
import React from 'react';

//material UI
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  discoverTraverller: {
    width: '100%',
    paddingBottom: theme.spacing(2),
    background: '#00ed7e',
    borderRadius: 15
  },
  traveller: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  tickIcon: {
    marginRight: theme.spacing(1)
  },
  getStartedBox: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  getStartedText: {
    color: '#fff',
    fontWeight: 700
  },
  getStartedButton: {
    background: '#fff',
    width: '100%',
    fontWeight: 700
  },
  heading: {
    marginBottom: theme.spacing(2)
  }
}));


const LeftBar = () => {

	const classes = useStyles();
  	
  	return (
    	<Box>
        <Typography variant="h6" className={classes.heading}>
          Explore People and connect!
        </Typography>
        <Paper elevation={0} className={classes.discoverTraverller}>
          <CardMedia
            className={classes.traveller}
            image="https://millennialboss.com/wp-content/uploads/2017/05/quotes-about-travel-for-girls.jpg"
            title="Restaurants"
            component="img"
          />

          <List>
            <ListItem>
                <CheckCircleOutlineOutlinedIcon className={classes.tickIcon} />
                <ListItemText primary="Discover places you always wanted to explore" />
            </ListItem>
            <ListItem>
                <CheckCircleOutlineOutlinedIcon className={classes.tickIcon} />
                <ListItemText primary="Explore food, people and culture" />
            </ListItem>
            <ListItem>
                <CheckCircleOutlineOutlinedIcon className={classes.tickIcon} />
                <ListItemText primary="Make new friends, stay connected" />
            </ListItem>
            <ListItem>
                <CheckCircleOutlineOutlinedIcon className={classes.tickIcon} />
                <ListItemText primary="Share your travel photos, videos" />
            </ListItem>
            <ListItem>
                <CheckCircleOutlineOutlinedIcon className={classes.tickIcon} />
                <ListItemText primary="Write review based on your experience as various places" />
            </ListItem>
          </List>
          <Box className={classes.getStartedBox}>
            <Typography variant="h6" className={classes.getStartedText}>
              Lets get started
            </Typography>
            <Button size="large" className={classes.getStartedButton}>Signup</Button>
          </Box>
        </Paper>
      </Box>
  	);
}

export default LeftBar;
