import React, { Component } from 'react'
import axios from '../axios'

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
    axios.get('/secret', {
      headers: {
        'Authorization': `Bearer: ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        const { status, message } = res.data
        if (status.type === 'success') {
          this.setState({ secret: message })
        } else if (status.type === 'failure' && status.code === 'invalid-token') {
        }
      })
      .catch(err => console.error(err))
  }
}

export default Home
