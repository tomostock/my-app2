import React from "react";
import { app } from "../base";
import Button from '@material-ui/core/Button';

function Home(props) {
  return (
    <div>
      <h2>Home Page</h2>
      <Button variant="contained" color="primary" onClick={() => app.auth().signOut()}>Sign out</Button>
    </div>
  );
}

export default Home;