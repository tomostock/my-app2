import { app } from "../base";

const SignOut = () => {
  alert("Sure?");
  app.auth().signOut();
};

export default SignOut;
