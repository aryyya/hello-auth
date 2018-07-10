import axios from 'axios'
import history from './history'

const instance = axios.create()

instance.interceptors.request.use(config => {

  config.headers = {
    'Authorization': `Bearer: ${localStorage.getItem('token')}`
  }

  return config
})

instance.interceptors.response.use(response => {
  const { status, token } = response.data

  if (status && status.type === 'success' && token) {
    localStorage.setItem('token', token)
  }

  else if (status && status.type === 'failure' && status.code === 'invalid-token') {
    localStorage.setItem('token', null)
    history.push('/log-in')
  }

  return response
})

export default instance
