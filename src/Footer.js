import React from 'react';
import Nav from './Nav';
import MenuList from '@material-ui/core/MenuList';
import logo from './logo192.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className='footer-inner'>
        <div className='footer-logo'>
          <img src={logo} alt="logo" width="50px" />
        </div>
          <MenuList>
            <Nav />
          </MenuList>
      </div>
    </div>
  );
}

export default Footer;