import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="logo-card">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <h1>Wave</h1>
        </div>
        <ul className="nav-menu">
          <li className="list-ele">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="list-ele">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="list-ele">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
