
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import GamepadIcon from '@material-ui/icons/Gamepad';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles({
  link: {
    textDecorationLine: 'none',
    color: 'white',
  },
  listItem: {
    minHeight: '50px',
    color: 'white',
  },
  flistItem: {
    minHeight: '36px',
    color: 'white',
    width: '75px',
    display: 'grid',
    justifyContent: 'center',
    textAlign: '-webkit-center',
  }

});

function Nav() {
  const classes = useStyles();
  return (
    <div className="flex">
      <Link to="/"className={classes.link}>
        <MenuItem className={classes.listItem}><HomeIcon />　TOP</MenuItem>
      </Link>
      <Link to="/Profile"className={classes.link}>
        <MenuItem className={classes.listItem}><AssignmentIndIcon />　PROFILE</MenuItem>
      </Link>
      <Link to="/Game"className={classes.link}>
        <MenuItem className={classes.listItem}><GamepadIcon />　GAME</MenuItem>
      </Link>
      <Link to="/Book"className={classes.link}>
        <MenuItem className={classes.listItem}><MenuBookIcon />　LYLIC</MenuItem>
      </Link>
      <Link to="/Contact"className={classes.link}>
        <MenuItem className={classes.listItem}><MailIcon />　MAIL</MenuItem>
      </Link>
    </div>
  );
}

export function Fnav() {
  const classes = useStyles();
  return (
    <div className="flex">
      <Link to="/Profile"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <AssignmentIndIcon />
          <div className="fnavName">PROFILE</div>
        </MenuItem>
      </Link>
      <Link to="/Game"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <GamepadIcon />
          <div className="fnavName">GAME</div>
        </MenuItem>
      </Link>
      <Link to="/Book"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <MenuBookIcon />
          <div className="fnavName">LYLIC</div>
        </MenuItem>
      </Link>
      <Link to="/Contact"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <MailIcon />
          <div className="fnavName">MAIL</div>
        </MenuItem>
      </Link>
    </div>
  );
}

export default Nav;