import React from "react";
import Button from '@material-ui/core/Button';

function Home(props) {
  return (
    <div>
      <Button variant="contained" color="primary" href="./logout">Log Out</Button>
    </div>
  );
}

export default Home;