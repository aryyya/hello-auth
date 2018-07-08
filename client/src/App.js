import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { time: null }
  }
  render() {
    return (
      <div className="App">
        <p>According to the server, the current time is: {this.state.time}</p>
      </div>
    )
  }
  componentDidMount() {
    const getTime = () => {
      fetch('/time')
        .then(res => res.json())
        .then(res => {
          this.setState({ time: res.time })
        })
    }
    setInterval(getTime, 1000)
    getTime()
  }
}

export default App
