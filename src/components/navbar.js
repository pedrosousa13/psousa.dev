import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div id="navbarMenuHeroA" className="navbar-menu">
        <div className="navbar-end has-text-white">
          <Link to="/" activeClassName="is-active" className="navbar-item">
            Home
          </Link>
          {/* <Link
						to="/blog/"
						activeClassName="is-active"
						className="navbar-item"
						partiallyActive={true}
					>
						Blog
					</Link> */}
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
