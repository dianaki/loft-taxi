import React from 'react';

import PropTypes from 'prop-types';
import { withAuth } from '../AuthContext';

export const Profile = () => {
  return (
    <div>
      <div>Профиль</div>
    </div>
  );
}

export const ProfileWithAuth =  withAuth(Profile);