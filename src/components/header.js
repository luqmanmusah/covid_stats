import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="img-h1">
          <img className="logo" id="logo" src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="" />
          <h1><Link to="/">Space Travelers&lsquo; Hub</Link></h1>
        </div>
        <nav>
          <div className="links">
            <ul>
              <li>
                <Link to="/" activeClassName="active">Rockets</Link>
              </li>
              <li>
                <Link to="/mission" activeClassName="active"> Missions</Link>
              </li>
              <li>
                <Link to="/myProfile" activeClassName="active"> My Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
