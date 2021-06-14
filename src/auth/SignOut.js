import { app } from "../base";

const SignOut = () => {
  app.auth().signOut();
};

export default SignOut;
