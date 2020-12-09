import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Map from './pages/Map';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { logIn, logOut } from './actions';

const PrivateRoute = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { logIn, logOut }
)(({
  component: RouteComponent,
  isLoggedIn,
  ...rest
}) => (
    <Route
      {...rest}
      render={routeProps =>
        isLoggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
            <Redirect to='/' />
          )
      }
    />
  ));

class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='maincontent'>
          <section>
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/signUp' component={SignUp} />
              <PrivateRoute path='/map' component={Map} />
              <PrivateRoute path='/profile' component={Profile} />
              <Redirect from='*' to='/' />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn
}))(App);