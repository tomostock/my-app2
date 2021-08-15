import { app } from "../base";
import '../css/auth.css';
import '../css/index.css';
import { Redirect } from 'react-router-dom';

const LogOut = () => {
  app.auth().signOut().then(function() {
    console.log("logout");
  }).catch(function(error) {
    alert(error);
  });

  return (
    <Redirect to="/" />
  );
};

export default LogOut;
