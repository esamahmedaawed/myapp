import React from 'react'
import header from './Header.css'

function Header() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light  ">
  <div className="container ">
    <a className="navbar-brand" href="#">Navbar</a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
    <div>
    <button type="button" class="btn btn-link display-2">Login</button>

    <button class="btn btn-primary  " type="submit">Become a member</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
