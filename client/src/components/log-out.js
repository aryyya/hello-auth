import React, { Component } from 'react'

class LogOut extends Component {
  constructor (props) {
    super(props)
    this.state = {
      countdown: 3,
      intervalId: null
    }
  }
  componentDidMount () {
    localStorage.removeItem('token')
    localStorage.removeItem('isAuthenticated')
    this.setState({
      intervalId: setInterval(() => {
        const { countdown, intervalId } = this.state
        this.setState({ countdown: countdown - 1})
        if (countdown <= 0) {
          clearInterval(intervalId)
          this.props.history.push('/')
        }
      }, 1000)
    })
  }
  componentWillUnmount () {
    clearInterval(this.state.intervalId)
  }
  render () {
    const { countdown } = this.state
    return (
      <div>You have been logged out. Redirecting to the home page in {countdown} seconds.</div> 
    )
  }
}

export default LogOut
