import React from 'react';
import { Fnav } from './Nav';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'none',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '82px',
    color: '#0a1612'
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    '&flex': {
      display: 'flex',
    }
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
          <Fnav />
        </MenuList>
      </div>
    </div>
  );
}

export default Footer;