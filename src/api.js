export const serverLogIn = async (email, password) => {
  return fetch(`https://loft-taxi.glitch.me/auth`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data)
}

export const serverSignUp = async (email, firstName, lastName, password) => {
  return fetch(`https://loft-taxi.glitch.me/register`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      name: firstName,
      surname: lastName,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data)
}


export const serverSetCard = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch(`https://loft-taxi.glitch.me/card`, {
    method: 'POST',
    body: JSON.stringify({
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cardName: cardName,
      cvc: cvc,
      token: token
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data)
}

export const serverGetCard = async (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data)
}