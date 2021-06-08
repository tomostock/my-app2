import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchAppBar from './Header';
import Profile from './Profile';
import App from './App';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <SearchAppBar />
        <Route exact path='/' component={App}/>
        <Route path='/Profile' component={Profile}/>
      </Router>
    )
  }
};

export default Routes