import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const NavN = () => {
  return (
    <div>
        <header className="header" data-header>
        <div className="container">

          <h1>
            <Link to='/' className="logo">BLACK ROSE LUXE<span className="span">.</span></Link>
          </h1>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">


              <li className="nav-item">
                <Link to="/menu" className="navbar-link" data-nav-link>Main Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/order" className="navbar-link" data-nav-link>Order Now</Link>
              </li>

              <li className="nav-item">
                <Link to="#" className="navbar-link" data-nav-link>Contact Us</Link>
              </li>

              <li className="nav-item">
                <Link to="/register" className="navbar-link" data-nav-link>Signup / Login</Link>
              </li>
            </ul>
          </nav>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search" data-search-btn>
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <button className="btn btn-hover">Reservation</button>

            <button className="nav-toggle-btn" aria-label="Toggle Menu" data-menu-toggle-btn>
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>

        </div>
      </header>
    </div>
  )
}

export default NavN
