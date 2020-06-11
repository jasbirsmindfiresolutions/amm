// IMPORTS
import React from 'react';

//material UI
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

// icons
import UserProfileIcon from '../../../assets/header-icons/icon-user-profile-pic.png';

const useStyles = makeStyles((theme: Theme) => ({
  post: {
  	height: theme.spacing(75),
  	marginBottom: theme.spacing(3)
  },
  postHead: {
  	display: 'flex'
  },
  postHeadUser: {
  	marginLeft: 0,
    display: 'flex'
  },
  postHeadFollow: {
  	marginRight: 0,
  	marginLeft: 'auto'
  },
  userProfileIcon: {
    width: '40px'
  },
  userProfileText: {
    alignSelf: 'center',
    marginLeft: theme.spacing(1),
    fontWeight: 700
  },
  postImage: {
    width: '100%'
  },
  postExcerpt: {
    textAlign: 'left'
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
}));

const Post = () => {

	const classes = useStyles();
  	
  	return (
          <Paper variant="outlined" className={classes.post}>
          	<Box component="div" p={1} className={classes.postHead}>
          		<Box component="div" p={1} className={classes.postHeadUser}>
          			<CardMedia
                  className={classes.userProfileIcon}
                  image={ UserProfileIcon }
                  title="User"
                  component="img"
                />
                <Typography className={classes.userProfileText}>
                  Angela Blogger
                </Typography>
          		</Box>
          		<Box component="div" p={1} className={classes.postHeadFollow}>
          			+ Follow
          		</Box>
          	</Box>

            <CardMedia
              className={classes.postImage}
              image="https://freedesignfile.com/upload/2017/07/Poppy-flower-field-beautiful-girl-HD-picture-13.jpg"
              title="Post"
              component="img"
            />

            <Box component="div" p={2} className={classes.postExcerpt}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              The lorem ipsum has been the industry's standard ... readmore
            </Box>

            <Divider />

            <Box component="div" p={1} className={classes.postFoot}>
              <Box component="div" p={1} className={classes.postFootLikes}>
              <FavoriteOutlinedIcon />
                120 Likes | 250 Comments
              </Box>
              <Box component="div" p={1} className={classes.postFootShares}>
                15 Shares
              </Box>
            </Box>

          </Paper>        
  	);
}

export default Post;
