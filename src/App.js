import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Home from "./components/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "./auth/AuthProvider";
import PrivateRoute from "./auth/PrivateRoute";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
