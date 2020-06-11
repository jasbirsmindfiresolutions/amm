// IMPORTS

//npm
import React from 'react';

//material UI
import Container from '@material-ui/core/Container';

//components
import HeaderTop from '../../../components/HeaderTop';
import HeaderBottom from '../../../components/HeaderBottom';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  containerRoot: {
    [theme.breakpoints.down('lg')]: {
      maxWidth: '1440px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '1280px',
    },
  }
}));

const Layout = (props) => {

	const classes = useStyles();
  	
  	return (
    	<Container>
        	<HeaderTop />
        	<HeaderBottom />
        	{ props.children }
      	</Container>
  	);
}

export default Layout;
