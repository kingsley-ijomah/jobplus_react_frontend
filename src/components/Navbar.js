import { AppBar, Box, Tab, Tabs, Toolbar, Typography, IconButton, Badge, Hidden } from '@material-ui/core'
import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.container
  },
  iconsWrap: {
    marginLeft: 'auto',
    '& .MuiButtonBase-root': {
      marginLeft: '13px',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '27px'
    }
  },
  tabs: {
    '& .MuiTab-root': {
      minWidth: 10,
      marginLeft: '10px'
    }
  },
  hamburger: {
    fontSize: '35px',
    marginRight: '10px'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <Hidden mdUp>
            <IconButton
              edge='start'
              color='inherit'
              arial-label='menu'
            >
              <MenuIcon className={classes.hamburger} />
            </IconButton>
          </Hidden>
          <Typography component="h6">JOBPLUS</Typography>
          <Hidden smDown>
            <Tabs value={1} className={classes.tabs}>
              <Tab
                key={0}
                label={'Home'}
                component={Link}
                to={'/'}
              />
              <Tab
                key={1}
                label={'Job Listings'}
                component={Link}
                to={'/job-listings'}
              />
              <Tab
                key={2}
                label={'Job Applications'}
                component={Link}
                to={'/job-applications'}
              />
            </Tabs>
          </Hidden>

          <Box className={classes.iconsWrap}>
            <IconButton size="small" component={Link} to={'/search'} color="inherit" edge='start'>
              <SearchIcon />
            </IconButton>

            <IconButton size="small" component={Link} to={'/notifications'} color="inherit" edge='start'>
              <Badge color="error" overlap="circular" variant="dot">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>

            <IconButton size="small" component={Link} to={'/saved-jobs'} color="inherit" edge='start'>
              <Badge badgeContent={2}>
                <StarBorderIcon />
              </Badge>
            </IconButton>

            <IconButton size="small" component={Link} to={'/search'} color="inherit" edge='start'>
              <PersonOutlineIcon />
            </IconButton>

            <IconButton size="small" component={Link} to={'/search'} color="inherit" edge='start'>
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
