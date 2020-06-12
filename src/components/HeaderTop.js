// IMPORTS

//npm
import React from 'react';

//material UI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  email: {
    color: '#a4a4bc',
    fontSize: theme.spacing(1.7),
    paddingLeft: theme.spacing(5),
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
    paddingRight: theme.spacing(5),
  },
  gridRight: {
    direction: 'rtl',
    paddingRight: theme.spacing(5),
  }
}));

const Layout = () => {

  const classes = useStyles();
    
    return (
      <Box component="div" p={1} bgcolor="#3d3b50">
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6} md={6}>
              <Typography component="span" className={classes.email}>
              info@attractivemyamar.com
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6} md={6} className={classes.gridRight}>
              <Box className={classes.signUpBox}>
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
            </Grid>
        </Grid>
      </Box>
    );
}

export default Layout;
