export const logIn = ({ username, password }) => {
  return { type: 'log-in', username, password }
}

export const logOut = () => {
  return { type: 'log-out' }
}
