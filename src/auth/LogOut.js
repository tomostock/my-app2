import { app } from "../base";
import Button from '@material-ui/core/Button';

const LogOut = () => {
  app.auth().signOut().then(function() {
    var unsubscribe = app.auth().onAuthStateChanged(() => {
      unsubscribe();
    });
  }).catch(function(error) {
    alert(error);
  });

  return (
    <div className="formContainer">
      <h1>Bye</h1>
      <Button variant="contained" color="primary" href="./">Top</Button>
    </div>
  );
};

export default LogOut;
