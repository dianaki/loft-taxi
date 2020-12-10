import { LOG_IN, LOG_OUT } from '../actions';

const initialState = {
  token: '',
  isLoggedIn: window.localStorage.getItem('state')
    ? JSON.parse(window.localStorage.getItem('state')).isLoggedIn
    : false
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      window.localStorage.setItem('state', JSON.stringify({
        isLoggedIn: true,
      }));
      return { isLoggedIn: true, token: action.payload.token }
    }
    case LOG_OUT: {
      window.localStorage.setItem('state', JSON.stringify({
        isLoggedIn: false
      }));
      return { isLoggedIn: false, token: '' }
    }
    default:
      return state;
  }
}