import React from 'react';
import { app } from "./base.js";


export default function MyAccount() {
  const user = app.auth().currentUser;
  console.log(user);
  return (
    <div className="MyAccount">
      <h1>My Account</h1>
      <div>
        Email: {user.email}<br />
        Last Sign In: {user.metadata.lastSignInTime}<br />
        Create Date: {user.metadata.creationTime}
      </div>
    </div>
  );
}