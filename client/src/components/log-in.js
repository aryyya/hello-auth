import React, { Component } from 'react'
import axios from 'axios'

import Message from './message'

class LogIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: '',
      type: ''
    }
  }
  render () {
    const { message, type } = this.state

    return (
      <div className="login">
        <div className="title">Log in to your account.</div>
        <div className="sub-title">Provide your previously created username and password.</div>
        <div className="form__section">
          Username: <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
        </div>
        <div className="form__section">
          Password: <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
        </div>
        <div className="form__section">
          <button onClick={this.logIn.bind(this)}>Log in</button>
        </div>
        <Message text={message} type={type} />
      </div>
    )
  }
  logIn () {
    const { username, password } = this.state

    axios.post('/login', {
      username,
      password
    })
      .then(res => {
        const { status } = res.data
        if (status === 'success') {
          this.setState({
            message: 'Logged in!',
            type: 'success'
          })
          this.props.history.push('/')
        } else {
          this.setState({
            message: 'Invalid username/password combination.',
            type: 'info'
          })
        }
      })
      .catch(err => {
        this.setState({
          message: 'Could not connect to the server.',
          type: 'error'
        })
      })
  }
}

export default LogIn
