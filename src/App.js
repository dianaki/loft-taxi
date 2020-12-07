import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Map from './pages/Map';
import { withAuth, PrivateRoute } from './AuthContext';

import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  state = { currentPage: 'login' }

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

export default withAuth(App);