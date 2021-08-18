import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import Nav from './Nav';
import MenuList from '@material-ui/core/MenuList';
import { app } from "./base";
import Title from './img/mtitle.png';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: 'fixed',
    color: '#0a1612',
    background: 'none',
    boxShadow: 'none'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: '#1a2930',
    width: '100px',
    height: '75px',
    fontSize: '15px',
    color: '#FFF',
    transform:　'rotate(-15deg)',
    fontFamily: ['"Noto Serif"','"Shippori Mincho B1"', 'serif'],
    margin: '24px 10px 0px'
  },
  title: {
    flexGrow: 1,
  },
  mtitle: {
    width: '200px',
    margin: '24px'
  },
  list: {
    width: 250,
    backgroundColor: '#1a2930',
    height: '100%'
  },
  link: {
    textDecorationLine: 'none',
    color: 'inherit',
  },
  right: {
    textAlign: 'right',
    marginRight: '8px'
  },
  rightIcon: {
    fontSize: 30,
    color: 'white'
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [loginEl, setLoginEl] = React.useState(null);
  app.auth().onAuthStateChanged((user) => {
    user ? setLoginEl(true) : setLoginEl(null);
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <React.Fragment key={'left'}>
            <IconButton onClick={toggleDrawer('left', true)} 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
            >Menu
            </IconButton>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
              <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer('left', false)}
                onKeyDown={toggleDrawer('left', false)}
              >
                <img src={Title} alt="portfolio in react" className={classes.mtitle}/>
                <div className={classes.right}><ClearIcon className={classes.rightIcon}/></div>
                <MenuList>
                  <Nav />
                </MenuList>
              </div>
            </Drawer>
          </React.Fragment>
          <Typography variant="h6" className={classes.title} />
          {loginEl && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{ fontSize: 40 }}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <a href="/myaccount"className={classes.link}>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </a>
                <a href="/logout" className={classes.link}>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </a>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
