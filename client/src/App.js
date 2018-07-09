import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/home'
import SignUp from './components/sign-up'
import LogIn from './components/log-in'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon open={false} />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>hello-auth</Typography>
              <Button color="inherit" component={Link} to="/log-in">Log In</Button>
              <Button color="inherit" component={Link} to="/sign-up">Sign Up</Button>
            </Toolbar>
          </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/log-in" component={LogIn} />
        </Switch>
        </div>
      </Router >
    )
  }
}

export default withStyles(styles)(App)
