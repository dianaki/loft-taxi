import React from 'react';
import Header from './components/Header';
import { LoginWithAuth } from './pages/Login';
import SignUp from './pages/SignUp';
import Map from './pages/Map';
import { ProfileWithAuth } from './pages/Profile';
import PropTypes from 'prop-types';
import { withAuth } from './AuthContext';
import './App.css';

class App extends React.Component {

  static propTypes = {
    currentPage: PropTypes.string
  }

  state = { currentPage: 'login' }

  changeCurrentPage = (event, newpage) => {
    event.preventDefault();
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: newpage });
    } else {
      this.setState({ currentPage: 'login' });
    }
  };

  render() {
    return (
      <div>
        <Header changePage={this.changeCurrentPage} />
        {this.state.currentPage === 'profile' && <ProfileWithAuth />}
        {this.state.currentPage === 'login' && <LoginWithAuth changeLogin={this.changeCurrentPage} />}
        {this.state.currentPage === 'map' && <Map />}
        {this.state.currentPage === 'signUp' && <SignUp changeSignUp={this.changeCurrentPage} />}
      </div>
    );
  }
}

export default withAuth(App);