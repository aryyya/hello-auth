import React, { Component } from 'react'
import axios from '../axios'

class Greeter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  componentDidMount () {
    if (localStorage.getItem('isAuthenticated')) {
      this.getData()
    }
  }
  getData () {
    axios.get('/name')
    .then(res => {
      this.setState({ name: res.data.name })
    })
  }
  render () {
    const { name } = this.state

    if (!name) {
      return <div></div>
    }

    return (
      <div className="greeter sub-title">
        Hello, {name}!
      </div>
    )
  }

}

export default Greeter
