import React from 'react';
import { Header } from './Header';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Map } from './Map';
import { Profile } from './Profile';
import './App.css';

class App extends React.Component {

  state = { currentPage: 'login' }

  changeCurrentPage = (event, newpage) => {
    event.preventDefault();
    this.setState({ currentPage: newpage });
  };

  formSubmit = (event) => {
    event.preventDefault();
    this.setState({ currentPage: 'map' })
  };

  render() {
    return (
      <div>
        <Header changePage={this.changeCurrentPage} />
        {this.state.currentPage === 'profile' && <Profile />}
        {this.state.currentPage === 'login' && <Login />}
        {this.state.currentPage === 'map' && <Map />}
        {this.state.currentPage === 'signUp' && <SignUp />}
      </div>
    )
  }
}
export default App;