import React from 'react';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Map from './pages/Map';
import Profile from './pages/Profile';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {

  static propTypes = {
    currentPage: PropTypes.string
  }

  state = { currentPage: 'login' }

  changeCurrentPage = (event, newpage) => {
    event.preventDefault();
    this.setState({ currentPage: newpage });
  };

  render() {
    return (
      <div>
        <Header changePage={this.changeCurrentPage} />
        {this.state.currentPage === 'profile' && <Profile />}
        {this.state.currentPage === 'login' && <Login changeLogin={this.changeCurrentPage} />}
        {this.state.currentPage === 'map' && <Map />}
        {this.state.currentPage === 'signUp' && <SignUp changeSignUp={this.changeCurrentPage} />}
      </div>
    )
  }
}

export default App;