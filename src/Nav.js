
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import SignOut from "./auth/SignOut";

const useStyles = makeStyles({
  link: {
    textDecorationLine: 'none',
    color: 'white',
  },
  listItem: {
    minHeight: '36px',
    color: 'white',
  }

});

function Nav() {
  const classes = useStyles();
  return (
    <div className="flex">
      <Link to="/"className={classes.link}>
        <MenuItem className={classes.listItem}>App</MenuItem>
      </Link>
      <Link to="/Profile"className={classes.link}>
        <MenuItem className={classes.listItem}>Profile</MenuItem>
      </Link>
      <Link to="/Game"className={classes.link}>
        <MenuItem className={classes.listItem}>Game</MenuItem>
      </Link>
      <MenuItem className={classes.listItem} onClick={() => SignOut()}>Logout</MenuItem>
    </div>
  );
}

export default Nav;