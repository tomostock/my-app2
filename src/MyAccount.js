import React from 'react';
import { app } from "./base.js";
import './css/auth.css';

export default function MyAccount() {
  const user = app.auth().currentUser;
  console.log(user);
  return (
    <div className="MyAccount">
      <h1>My Account</h1>
      <div>
        Email: <br />
        {user.email}<br /><br />
        Last Sign In: <br />
        {user.metadata.lastSignInTime}<br /><br />
        Create Date: <br />
        {user.metadata.creationTime}
      </div>
    </div>
  );
}