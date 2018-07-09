import React, { Component } from 'react'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      secret: ''
    }
  }
  render () {
    const { secret } = this.state
    return (
      <div className="home">
        <p className="title">This is the home page.</p>
        <p className="sub-title">Use the top bar to navigate.</p>
        <button onClick={this.getSecret.bind(this)}>Ask the server for a secret</button>
        {secret !== '' ? (
          <div>
            <p>The secret message from the server is: "{secret}"</p>
            <p>You shouldn't be seeing this if you aren't logged in.</p>
          </div>
        ) : ''}
      </div>
    )
  }
  getSecret () {
    fetch('/secret')
      .then(res => res.json())
      .then(res => this.setState({ secret: res.message }))
      .catch(err => console.error(err))
  }
}

export default Home
