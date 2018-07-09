import React, { Component } from 'react'

class LogIn extends Component {
  constructor (props) {
    super(props)
    this.state = { username: '', password: '' }
  }
  render () {
    return (
      <div className="login">
        <div>login:</div>
        <div>
          username: <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
        </div>
        <div>
          password: <input type="password" value={this.state.password} onChange={e => this.setState({ username: e.target.value })} />
        </div>
        <div>
          <button onClick={this.logIn.bind(this)}>login</button>
        </div>
      </div>
    )
  }
  logIn () {
    console.log(`Logging in with username "${this.state.username}" and password "${this.state.password}".`)
  }
}

export default LogIn
