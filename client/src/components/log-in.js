import React, { Component } from 'react'

class LogIn extends Component {
  constructor (props) {
    super(props)
    this.state = { username: '', password: '' }
  }
  render () {
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
      </div>
    )
  }
  logIn () {
    console.log(`Logging in with username "${this.state.username}" and password "${this.state.password}".`)
  }
}

export default LogIn
