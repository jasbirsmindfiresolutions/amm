// IMPORTS

//npm
import React from 'react';

//material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  email: {
    color: '#a4a4bc',
    fontSize: theme.spacing(1.7)
  },
  phone: {
    color: '#a4a4bc',
    fontSize: theme.spacing(1.8),
    marginLeft: theme.spacing(4),
  },
  loginSignupText: {
    color: '#ffffff',
    fontWeight: 600
  },
  loginSignupPipe: {
    color: '#ffffff',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  signUpBox: {
    float: 'right',
    [theme.breakpoints.down('sm')]: {
      float: 'none',
    },
  }
}));

const Layout = () => {

  const classes = useStyles();
    
    return (
          <Box component="div" p={1} bgcolor="#3d3b50">
            <Box component="span" ml={5}>
              <Typography component="span" className={classes.email}>
                info@attractivemyamar.com
              </Typography>
            </Box>
            <Box component="span" mr={5} className={classes.signUpBox}>
              <Typography component="span" className={classes.loginSignupText}>
                Login
              </Typography>
              <Typography component="span" className={classes.loginSignupPipe}>
                | 
              </Typography>
              <Typography component="span" className={classes.loginSignupText}>
                Signup
              </Typography>
              <Typography component="span" className={classes.phone}>
                Call Us: +91 123-456-7890
              </Typography>
            </Box>
          </Box>
    );
}

export default Layout;
