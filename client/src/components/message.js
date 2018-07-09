import React, { Component } from 'react'

class Message extends Component {
  render () {
    const { text, type = '' } = this.props

    if (!text) {
      return ''
    }

    return (
      <div className={`message ${type}`}>
        {text}
      </div>
    )
  }
}

export default Message
