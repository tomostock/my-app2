import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Title from './img/title.png';
import Bowwow from './img/bowwow.jpg';
import lou3 from './img/lou3.jpg';
import lou2 from './img/lou2.jpg';
import lou1 from './img/lou1.jpg';
import './css/App.css';
import './css/auth.css';
import './css/index.css';
import Button from '@material-ui/core/Button';
import Home from "./components/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider, AuthContext } from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #0a1612',
    padding:  '0px',
    width: '280px',
    boxShadow: theme.shadows[5]
  },
}));

function rotateLasers() {
  if(document.getElementById("box_err")) {
    return
  }
  var aElement = document.getElementById("box");
  aElement.id = "box2";
  document.getElementById("lou").src = lou1;

  setTimeout(function(){
    document.getElementById("lou").style.animation = '0.6s linear infinite rotation';
  }, 1000);
  setTimeout(function(){
    document.getElementById("lou").style.animation = '0.4s linear infinite rotation';
  }, 2000);
  setTimeout(function(){
    document.getElementById("lou").style.animation = '0.2s linear infinite rotation';
  }, 3000);

  setTimeout(function(){
    var aElement = document.getElementById("box2");
    aElement.id = "box_err";
    document.getElementById("lou").style.display ="none";
    setTimeout(function(){
      document.getElementById("lou2").style.display ="block";
    }, 2000);
  }, 6500);

  setTimeout(function(){
    var new_element = document.createElement('img');
    new_element.id = "message";
    new_element.src = Bowwow;
    new_element.height = 200;
    document.getElementById("box3").appendChild(new_element);
  }, 6500);
}

export function Startup() {
  if (document.location.pathname === "/signup" || document.location.pathname === "/myaccount"){
    return (<div />)
  }
  setTimeout(function() {
    document.getElementById("AppTitle").classList.add("-visible");
  }, 5000); 
  setTimeout(function() {
    document.getElementById("AppTitle").style.display ="none";
  }, 6000);
  return (
    <div id="AppTitle">
      <h1>
        <span className="c1">what</span>
        <span className="c2">.</span>
        <span className="c3">.</span>
        <span className="c4">?</span>
      </h1>
    </div>
    )
}

export default function App() {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <img src={Title} className="title"width="320" alt="portfolio in react"/>
      <div className="App-header">
        <span id="box" onClick={rotateLasers} >
          <img id="lou" src={lou3} height="240" alt="lou"/>
          <img id="lou2" src={lou2} height="240" alt="lou2"/>
        </span>
        <div id="box3" />
        {currentUser ? (<div className="nullBtn" />) : (
          <div>
          <Button variant="contained" color="primary" type="submit" onClick={handleOpen} id="loginBtn">
            Login or Signup
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div className="auth" id="transition-modal-description">
                  <AuthProvider>
                    <Router>
                      <PrivateRoute exact path="/" component={Home} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/signup" component={SignUp} />
                    </Router>
                  </AuthProvider>
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
        )}
      </div>
    </div>
  );
}