import React from 'react';
import Nav from './Nav';
import MenuList from '@material-ui/core/MenuList';
import logo from './logo192.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  logo: {
    padding: '20px',
  }

}));

const scrollToTopOnMount = () => {
  window.scrollTo(0, 0);
};

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <MenuList onClick={scrollToTopOnMount}>
          <Nav />
        </MenuList>
        <div className={classes.logo}>
          <img src={logo} alt="logo" width="50px" />
        </div>
      </div>
    </div>
  );
}

export default Footer;