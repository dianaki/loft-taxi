import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Map from './pages/Map';
import PropTypes from 'prop-types';
import { withAuth } from './AuthContext';

const PAGES = {
  login: (props) => <Login {...props} />,
  signUp: (props) => <SignUp {...props} />,
  profile: (props) => <Profile {...props} />,
  map: (props) => <Map {...props} />
}

class App extends React.Component {

  static propTypes = {
    currentPage: PropTypes.string
  }

  state = { currentPage: 'login' }

  changeCurrentPage = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else if (page === 'signUp') {
      this.setState({ currentPage: 'signUp' });
    } else {
      this.setState({ currentPage: 'login' });
    }
  };

  render() {
    return (
      <div className='wrapper'>
        <Header changePage={this.changeCurrentPage} />
        {PAGES[this.state.currentPage]({ changePage: this.changeCurrentPage })}
      </div>
    );
  }
}

export default withAuth(App);