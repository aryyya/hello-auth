import axios from '../axios'

export const logIn = ({ username, password }) => {
  return { type: 'log-in', username, password }
}

export const logOut = () => {
  return { type: 'log-out' }
}

export const setName = name => (
  { type: 'set-name', name }
)

export const getName = () => {
  return dispatch => {
    return axios.get('/name')
      .then(res => {
        dispatch(setName(res.data.name))
      })
  }
}
