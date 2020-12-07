import React, { Component } from 'react';
import { withAuth } from '../AuthContext';

class Profile extends Component {

  render() {
    return (
      <div>Профиль</div>
    );
  }
}

export default withAuth(Profile);