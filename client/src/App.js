import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './components/home'
import Signup from './components/signup'
import Login from './components/login'

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/signup">signup</Link></li>
              <li><Link to="/login">login</Link></li>
            </ul>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
