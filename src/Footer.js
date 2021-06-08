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
    '&flex': {
      display: 'flex',
    }

  },
  logo: {
    padding: '20px',
    textAlign: 'right',
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
        <MenuList onClick={scrollToTopOnMount} className='footer'>
          <Nav />
        </MenuList>
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="logo" width="50px" />
      </div>
    </div>
  );
}

export default Footer;