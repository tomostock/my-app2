
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import GamepadIcon from '@material-ui/icons/Gamepad';
import PhotoIcon from '@material-ui/icons/Photo';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';

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
      <Link to="/Swipe"className={classes.link}>
        <MenuItem className={classes.listItem}>Photo</MenuItem>
      </Link>
      <Link to="/Swipe"className={classes.link}>
        <MenuItem className={classes.listItem}>Mail</MenuItem>
      </Link>
    </div>
  );
}

export function Fnav() {
  const classes = useStyles();
  return (
    <div className="flex">
      <Link to="/"className={classes.link}>
        <MenuItem className={classes.listItem}><HomeIcon /></MenuItem>
      </Link>
      <Link to="/Profile"className={classes.link}>
        <MenuItem className={classes.listItem}><AssignmentIndIcon /></MenuItem>
      </Link>
      <Link to="/Game"className={classes.link}>
        <MenuItem className={classes.listItem}><GamepadIcon /></MenuItem>
      </Link>
      <Link to="/Swipe"className={classes.link}>
        <MenuItem className={classes.listItem}><PhotoIcon /></MenuItem>
      </Link>
      <Link to="/Swipe"className={classes.link}>
        <MenuItem className={classes.listItem}><MailIcon /></MenuItem>
      </Link>
    </div>
  );
}

export default Nav;