// import React from "react";
import { app } from "../base";
import Button from '@material-ui/core/Button';
// import { AuthProvider } from "./auth/AuthProvider";

const LogOut = () => {

  app.auth().signOut();
  // React.useEffect(() => {

  // }, []);
  // useEffect(() => {
  //   const subscription = props.source.subscribe();
  //   return () => {
  //     // Clean up the subscription
  //     subscription.unsubscribe();
  //   };
  // });
  return (
    <div className="formContainer">
      <h1>Bye</h1>
      <Button variant="contained" color="primary" href="./">Top</Button>
    </div>
  );
};

export default LogOut;
