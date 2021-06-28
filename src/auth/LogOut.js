import { app } from "../base";
import Button from '@material-ui/core/Button';
import React from "react";

const LogOut = () => {
  app.auth().signOut().then(function() {
    // const [currentUser, setCurrentUser] = useState(null);
    var unsubscribe = app.auth().onAuthStateChanged(() => {
      unsubscribe();
      localStorage.clear();
    });
  }).catch(function(error) {
    alert(error);
  });

  return (
    <div className="formContainer">
      <h1>Log Outed</h1>
      <Button variant="contained" color="primary" href="./">Top</Button>
    </div>
  );
};

export default LogOut;
