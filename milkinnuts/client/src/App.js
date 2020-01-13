// React
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Layout from "./components/dashboard/Layout";
import NotFound from "./components/404/404";
import Home from "./components/home/Home";
import Delivery from "./components/delivery/Delivery";
import LandingPage from './pages/landing'
import NavBar from './components/GroupComponent'
import Shopping from './pages/shopping'

// Style sass
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtTokenTeams) {
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtTokenTeams);
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/delivery" component={Delivery} />
              <Route exact path="/landing" component={LandingPage} />
              <Route exact path="/shopping" component={Shopping} />

              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/dashboard" component={Layout} />
              <Route
                component={localStorage.jwtTokenTeams ? Layout : NotFound}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
