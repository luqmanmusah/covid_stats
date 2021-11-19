import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="img-h1">
          <h1><NavLink to="/">Covid_19</NavLink></h1>
        </div>
        <nav>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="selected">2021</NavLink>
              </li>
              <li>
                <NavLink to="/mission" activeClassName="selected">Settings</NavLink>
              </li>
              <li>
                <NavLink to="/myProfile" activeClassName="selected"> My Profile</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
