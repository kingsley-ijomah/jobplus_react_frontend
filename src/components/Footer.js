import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: '0px',
    backgroundColor: theme.palette.common.alpha,
    color: theme.palette.common.light,
    textAlign: 'center',
    padding: '15px',
  }
}))

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>COPYRIGHT &copy; JobPlus 2021</div>
  )
}
