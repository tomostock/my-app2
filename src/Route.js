import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";
import Header from './Header';
import App from './App';
import Profile from './Profile';
import DemoAutoPlay from './Swipe';
import Game from './Game';
import Footer from './Footer';
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
            <Route path='/Swipe' component={DemoAutoPlay}/>
            <PrivateRoute path='/Game' component={Game}/>
            <Route exact path="/signup" component={SignUp} />
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    )
  }
};

export default Routes