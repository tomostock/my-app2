import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import App from './App';
import Footer from './Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route>
          <Header />
        </Route>
        <Route exact path='/' component={App}/>
        <Route path='/Profile' component={Profile}/>
        <Route>
          <Footer />
        </Route>
      </Router>
    )
  }
};

export default Routes