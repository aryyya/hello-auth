import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setName, getName } from '../actions'

class Greeter extends Component {
  componentDidMount () {
    setTimeout(() => {
      this.props.getName()
    }, 1000)
  }
  render () {
    return (
      <div className="greeter">
        Hello, {this.props.name}.
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  getName: () => dispatch(getName())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeter)
