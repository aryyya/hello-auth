import React, { Component } from 'react'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = { username: '', password: '' }
  }
  render () {
    return (
      <div className="signup">
        <div className="title">Sign up for an account.</div>
        <div className="sub-title">Create a username and password.</div>
        <div className="form__section">
          Username: <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
        </div>
        <div className="form__section">
          Password: <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
        </div>
        <div className="form__section">
          <button onClick={this.signUp.bind(this)}>Sign up</button>
        </div>
      </div>
    )
  }
  signUp () {
    console.log(`Signing in with username "${this.state.username}" and password "${this.state.password}".`)
  }
}

export default SignUp
