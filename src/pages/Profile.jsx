import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCard, getCard } from '../actions';

class Profile extends Component {
  state = {
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: '',
  }

  componentDidMount() {
    this.props.getCard();

    setTimeout(() => {
      this.setState({ cardNumber: this.props.cardNumber });
      this.setState({ expiryDate: this.props.expiryDate });
      this.setState({ cardName: this.props.cardName });
      this.setState({ cvc: this.props.cvc });
    }, 500)
  }

  setCard = event => {
    event.preventDefault();
    const { cardNumber, expiryDate, cardName, cvc } = event.target;
    this.props.setCard(cardNumber.value, expiryDate.value, cardName.value, cvc.value);
  };

  render() {

    const { cardNumber, expiryDate, cardName, cvc } = this.state;
    return (
      <>
        <h2>Профиль</h2>
        <div>Введите платежные данные</div>
        <form onSubmit={this.setCard}>
          <label htmlFor='cardNumber'>Номер карты
            <input
              id='cardNumber'
              name='cardNumber'
              size='28'
              value={cardNumber}
              onChange={event => this.setState({ cardNumber: event.target.value })}
            />
          </label>
          <label htmlFor='expiryDate'>MM/YY
            <input
              id='expiryDate'
              name='expiryDate'
              size='28'
              value={expiryDate}
              onChange={event => this.setState({ expiryDate: event.target.value })}
            />
          </label>
          <label htmlFor='cardName'>Имя владельца
            <input
              id='cardName'
              type='text'
              name='cardName'
              size='28'
              value={cardName}
              onChange={event => this.setState({ cardName: event.target.value })}
            />
          </label>
          <label htmlFor='cvc'>CVC
            <input
              id='cvc'
              type='cvc'
              name='cvc'
              size='28'
              value={cvc}
              onChange={event => this.setState({ cvc: event.target.value })}
            />
          </label>
          <button type='submit'>Сохранить</button>
        </form>
      </>

    );
  }
}

export default connect(
  (state) => ({
    cardNumber: state.cardNumber,
    expiryDate: state.expiryDate,
    cardName: state.cardName,
    cvc: state.cvc,
    token: state.token
  }),
  { setCard, getCard }
)(Profile);