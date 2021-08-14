
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import GamepadIcon from '@material-ui/icons/Gamepad';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { AuthContext } from "./auth/AuthProvider";
import { TittleAlarm } from "./Game";

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
  },
  icon: {
    fontSize: 36,
  }
});

function GameTittle() {
  TittleAlarm();
}

function Nav() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex">
      <Link to="/"className={classes.link}>
        <MenuItem className={classes.listItem}><HomeIcon />　TOP</MenuItem>
      </Link>
      <Link to="/Profile"className={classes.link}>
        <MenuItem className={classes.listItem}><AssignmentIndIcon />　PROFILE</MenuItem>
      </Link>
      <Link to="/Game"className={classes.link}>
        { currentUser ? 
          <MenuItem className={classes.listItem} onClick={GameTittle}><GamepadIcon />　GAME</MenuItem> 
          : <MenuItem className={classes.listItem} ><GamepadIcon />　GAME</MenuItem> }
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
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex">
      <Link to="/Profile"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <AssignmentIndIcon className={classes.icon} />
          <div className="fnavName">PROFILE</div>
        </MenuItem>
      </Link>
      <Link to="/Game"className={classes.link}>
      { currentUser ? 
        <MenuItem className={classes.flistItem} onClick={GameTittle}>
          <GamepadIcon className={classes.icon} />
            <div className="fnavName">GAME</div>
        </MenuItem> :
        <MenuItem className={classes.flistItem} > 
          <GamepadIcon className={classes.icon} />
          <div className="fnavName">GAME</div>
        </MenuItem> }
      </Link>
      <Link to="/Book"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <MenuBookIcon className={classes.icon} />
          <div className="fnavName">LYLIC</div>
        </MenuItem>
      </Link>
      <Link to="/Contact"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <MailIcon className={classes.icon} />
          <div className="fnavName">MAIL</div>
        </MenuItem>
      </Link>
    </div>
  );
}

export default Nav;