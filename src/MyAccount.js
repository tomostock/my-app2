import React from 'react';
import { app } from "./base.js";


export default function MyAccount() {
  const user = app.auth().currentUser;
  return (
    <div className="MyAccount">
      <h1>My Account</h1>
      <div>your email: {user.email}</div>
    </div>
  );
}