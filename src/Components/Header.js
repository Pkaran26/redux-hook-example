import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ()=>(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <NavLink className="navbar-brand" to="/">React Redux</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
