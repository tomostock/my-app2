import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import App from './App';
import Profile from './Profile';
import Game from './Game';
import Footer from './Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route>
          <Header />
        </Route>
        <div className='contents'>
          <Route exact path='/' component={App}/>
          <Route path='/Profile' component={Profile}/>
          <Route path='/Game' component={Game}/>
          <Route>
            <Footer />
          </Route>
        </div>
      </Router>
    )
  }
};

export default Routes