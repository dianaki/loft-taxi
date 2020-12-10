export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGNUP = 'SIGNUP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const SET_CARD = 'SET_CARD';
export const GET_CARD = 'GET_CARD';
export const SET_CARD_SUCCESS = 'SET_CARD_SUCCESS';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS';

export const logIn = (token) => ({
  type: LOG_IN,
  payload: { token }
});
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password }
});
export const signUp = (email, firsName, lastName, password) => ({
  type: SIGNUP,
  payload: { email, firsName, lastName, password }
});
export const setCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SET_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token }
});
export const setCardSuccess = () => ({ type: SET_CARD_SUCCESS });
export const getCard = (token) => ({
  type: GET_CARD,
  payload: { token }
});
export const getCardSuccess = (data) => ({
  type: GET_CARD_SUCCESS,
  payload: {
    cardNumber: data.cardNumber,
    expiryDate: data.expiryDate,
    cardName: data.cardName,
    cvc: data.cvc
  }
});