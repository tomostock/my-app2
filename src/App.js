import lou from './img/lou3.jpg';
import lou2 from './img/lou2.jpg';
import './css/App.css';
import Button from '@material-ui/core/Button';
import Home from "./components/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function rotateLasers() {
  if(document.getElementById("box_er")) {
    return
  }
  var aElement = document.getElementById("box");
  aElement.id = "box2";
  setTimeout(function(){
    var aElement = document.getElementById("box2");
    aElement.id = "box_er";
    document.getElementById("lou").style.display ="none";
    document.getElementById("lou2").style.display ="block";
  }, 3000);
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span id="box" onClick={rotateLasers} ><img id="lou" src={lou} width="250" alt="lou"/></span>
        <img id="lou2" src={lou2} width="250" alt="lou2"/>
        <div className="auth">
          <AuthProvider>
            <Router>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </Router>
          </AuthProvider>
          <Button color="primary" href="/signup">
          signup
          </Button>
        </div>
      </div>
    </div>
  );
}
export default App;
