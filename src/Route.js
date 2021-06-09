import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";
import Header from './Header';
import App from './App';
import Profile from './Profile';
import Game from './Game';
import Footer from './Footer';
import Home from "./components/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";


class Routes extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Route>
            <Header />
          </Route>
          <div className='contents'>
            <Route exact path='/' component={App}/>
            <Route path='/Profile' component={Profile}/>
            <Route path='/Game' component={Game}/>
            {/* <PrivateRoute exact path="/" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route>
              <Footer />
            </Route>
          </div>
        </Router>
      </AuthProvider>
    )
  }
};

export default Routes