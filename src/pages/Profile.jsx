import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withAuth } from '../AuthContext';

class Profile extends Component {

  static propTypes = {
    currentPage: PropTypes.string
  }
  render() {
    return (
      <div>Профиль</div>
    );
  }
}

export default withAuth(Profile);