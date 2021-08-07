import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
  },
  container: {
    ...theme.container,
    padding: '5px 0'
  },
  title: {
    fontSize: '19px'
  }
}));

export default function PageTitle(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>{title}</h1>
      </div>
    </div>
  )
}
