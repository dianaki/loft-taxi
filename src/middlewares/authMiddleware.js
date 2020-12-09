import { logIn } from '../actions';
import { serverLogIn, serverSignUp } from '../api';
import { AUTHENTICATE, SIGNUP } from '../actions'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogIn(email, password);
    if (success) {
      store.dispatch(logIn());
    }
  } else if (action.type === SIGNUP) {
    const { email, firsName, lastName, password } = action.payload;
    const success = await serverSignUp(email, firsName, lastName, password);
    if (success) {
      store.dispatch(logIn());
    }
  } else {
    next(action)
  }
};