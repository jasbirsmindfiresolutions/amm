// IMPORTS

//npm
import React from 'react';
import clsx from 'clsx';

//material UI
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from '@material-ui/core/Divider';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

//icons
import AmmLogo from '../assets/header-icons/amm-logo.png';
import exploreLogo from '../assets/header-icons/icon-explore.png';
import SearchIcon from '../assets/header-icons/icon-search.png';
import ArticlesIcon from '../assets/header-icons/icon-articles.png';
import ArticleAddIcon from '../assets/header-icons/icon-add-article.png';
import UserProfileIcon from '../assets/header-icons/icon-user-profile-pic.png';

const useStyles = makeStyles((theme: Theme) => ({
  icons: {
    width: 'inherit',
    height: 'fit-content',
    alignSelf: 'center',
    marginRight: theme.spacing(2),
    cursor: 'pointer'
  },
  logo: {
    marginLeft: theme.spacing(4)
  },
  userProfileText: {
    color: "#fff",
    fontWeight: 700,
    alignSelf: 'center',
    marginRight: theme.spacing(4)
  },
  divider: {
    height: theme.spacing(4),
    alignSelf: 'center',
    marginRight: theme.spacing(2)
  },
  flex: {
    display: 'flex'
  },
  gridRight: {
    justifyContent: 'flex-end'
  },
  searchBar: {
    '& div': {
      background: '#fff'
    },
    '& input': {
      padding: '12.5px 14px'
    },
    '& label': {
      lineHeight: '0.5'
    }
  }
}));

const Layout = () => {

  const classes = useStyles();

  // Add article
  function addArticleHandler() {
    alert('Article added!');
  }

  // Show articles
  function showArticlesHandler() {
    alert('Showing Articles!');
  }
    
    return (
        <Box component="div" p={2} bgcolor="#11cfd3">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3} md={3} className={classes.flex}>
              <CardMedia
                className={clsx(classes.icons, classes.logo)}
                image={ AmmLogo }
                title="Logo"
                component="img"
              />
            </Grid>
            <Grid item xs={12} lg={6} md={6} className={clsx(classes.flex)}>
              <CardMedia
                className={classes.icons}
                image={ exploreLogo }
                title="Explore"
                component="img"
              />
              <TextField
                className={classes.searchBar}
                label="Search with keyword"
                fullWidth={true}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                        <CardMedia
                          className={classes.icons}
                          image={ SearchIcon }
                          title="Search Icon"
                          component="img"
                        />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} lg={3} md={3} className={clsx(classes.flex, classes.gridRight)}>
                <CardMedia
                  className={classes.icons}
                  image={ ArticlesIcon }
                  title="Articles"
                  component="img"
                  onClick={showArticlesHandler}
                />
                <CardMedia
                  className={classes.icons}
                  image={ ArticleAddIcon }
                  title="Add Article"
                  component="img"
                  onClick={addArticleHandler}
                />
                <Divider orientation="vertical" flexItem className={classes.divider} />
                <CardMedia
                  className={classes.icons}
                  image={ UserProfileIcon }
                  title="Add Article"
                  component="img"
                />
                <Typography className={classes.userProfileText}>
                  #01
                </Typography>
            </Grid>
          </Grid> 
        </Box>
    );
}

export default Layout;
