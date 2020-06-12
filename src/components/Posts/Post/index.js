// IMPORTS
import React from 'react';

//material UI
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

// styles
import { makeStyles, Theme } from '@material-ui/core/styles';

// icons
import UserProfileIcon from '../../../assets/header-icons/icon-user-profile-pic.png';

const useStyles = makeStyles((theme: Theme) => ({
  post: {
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
    width: '40px',
    height: '40px'
  },
  userProfileText: {
    alignSelf: 'center',
    marginLeft: theme.spacing(1),
    fontWeight: 700
  },
  postTime: {
    marginLeft: theme.spacing(1)
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
  readmoreText: {
    color: '#6ddadd',
    fontWeight: 700
  },
  postLocationIcon: {
    display: 'block',
    marginLeft: theme.spacing(0.5),
    fontSize: 18,
    display: 'inline',
    color: '#ed4e50'
  },
  postLocationBox: {
    display: 'flex'
  },
  postTitle: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    fontSize: 18,
    fontWeight: 900
  }
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
                <Box>
                  <Typography className={classes.userProfileText}>
                    Angela Blogger
                  </Typography>
                  <Box className={classes.postLocationBox}>
                    <LocationOnIcon className={classes.postLocationIcon} />
                    <Typography variant="caption" display="inline">
                      Spain
                    </Typography>
                  </Box>
                  <Typography variant="caption" component="p" className={classes.postTime}>
                    8 hours ago
                  </Typography>
                </Box>
          		</Box>
          		<Box component="div" p={1} className={classes.postHeadFollow}>
                <Typography variant="h6">
          			  + Follow
                </Typography>
          		</Box>
          	</Box>

            <CardMedia
              className={classes.postImage}
              image="https://freedesignfile.com/upload/2017/07/Poppy-flower-field-beautiful-girl-HD-picture-13.jpg"
              title="Post"
              component="img"
            />
            <Typography className={classes.postTitle}>
              Awesome experience at Padonmar
            </Typography>
            <Box p={2} className={classes.postExcerpt}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              The lorem ipsum has been the industry's standard ...
              <Typography display="inline" className={classes.readmoreText}>
                read more
              </Typography>
            </Box>

            <Divider />

            <Box component="div" p={1} className={classes.postFoot}>
              <Box component="div" p={1} className={classes.postFootLikes}>
              <Box>
                <FavoriteOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <Typography variant="body2">
                  130 Likes | 250 Comments
                </Typography>
              </Box>
              </Box>
              <Box component="div" p={1} className={classes.postFootShares}>
                <Box>
                  <ScreenShareOutlinedIcon />
                  <Typography variant="body2">
                    15 Shares
                  </Typography>
                </Box>
              </Box>
            </Box>

          </Paper>        
  	);
}

export default Post;