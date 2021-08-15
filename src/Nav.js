
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
    fontSize: 35,
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
        <MenuItem className={classes.listItem}><HomeIcon className={classes.yIcon}/>　Top</MenuItem>
      </Link>
      <Link to="/Profile"className={classes.link}>
        <MenuItem className={classes.listItem}><AssignmentIndIcon />　Profile</MenuItem>
      </Link>
      <Link to="/Game"className={classes.link}>
        { currentUser ? 
          <MenuItem className={classes.listItem} onClick={GameTittle}><GamepadIcon />　Game</MenuItem> 
          : <MenuItem className={classes.listItem} ><GamepadIcon />　Game</MenuItem> }
      </Link>
      <Link to="/Book"className={classes.link}>
        <MenuItem className={classes.listItem}><MenuBookIcon />　Lylic</MenuItem>
      </Link>
      <Link to="/Contact"className={classes.link}>
        <MenuItem className={classes.listItem}><MailIcon />　Mail</MenuItem>
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
          <div className="fnavName">Profile</div>
        </MenuItem>
      </Link>
      <Link to="/Game"className={classes.link}>
      { currentUser ? 
        <MenuItem className={classes.flistItem} onClick={GameTittle}>
          <GamepadIcon className={classes.icon} />
            <div className="fnavName">Game</div>
        </MenuItem> :
        <MenuItem className={classes.flistItem} > 
          <GamepadIcon className={classes.icon} />
          <div className="fnavName">Game</div>
        </MenuItem> }
      </Link>
      <Link to="/Book"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <MenuBookIcon className={classes.icon} />
          <div className="fnavName">Lylic</div>
        </MenuItem>
      </Link>
      <Link to="/Contact"className={classes.link}>
        <MenuItem className={classes.flistItem}>
          <MailIcon className={classes.icon} />
          <div className="fnavName">Mail</div>
        </MenuItem>
      </Link>
    </div>
  );
}

export default Nav;