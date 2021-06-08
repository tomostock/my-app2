
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

function Nav() {
  return (
    <div>
      <Link to="/">
        <MenuItem>App</MenuItem>
      </Link>
      <Link to="/Profile">
        <MenuItem>Profile</MenuItem>
      </Link>
      <MenuItem>Logout</MenuItem>
    </div>
  );
}

export default Nav;