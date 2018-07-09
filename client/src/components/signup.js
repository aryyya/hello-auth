import React, { Component } from 'react'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = { username: '', password: '' }
  }
  render () {
    return (
      <div className="signup">
        <div>signup:</div>
        <div>
          username: <input type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
        </div>
        <div>
          password: <input type="password" value={this.state.password} onChange={e => this.setState({ username: e.target.value })} />
        </div>
        <div>
          <button onClick={this.signup.bind(this)}>signup</button>
        </div>
      </div>
    )
  }
  signup () {
    console.log(`Signing in with username "${this.state.username}" and password "${this.state.password}".`)
  }
}

export default Signup
