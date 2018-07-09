import React, { Component } from 'react'
import './top-bar.css'

import { Link } from 'react-router-dom'

const pages = [
  { name: 'Sign up', path: '/sign-up' },
  { name: 'Log in', path: '/log-in' }
]

const getLink = page => (
  <Link className="top-bar__link" to={page.path}>{page.name}</Link>
)

const getLinkItem = page => (
  <li className="top-bar__link-item" key={page.name}>
    {getLink(page)}
  </li>
)

class TopBar extends Component {
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar__title">
          {getLink({name: 'hello-auth', path: '/'})}
        </div>
        <ul className="top-bar__links-list">
          {pages.map(getLinkItem)}
        </ul>
      </div>
    )
  }
}

export default TopBar
