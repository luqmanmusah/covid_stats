import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronCompactLeft, GearFill, MicFill } from 'react-bootstrap-icons';

const Header = () => (
  <div className="nav">
    <NavLink to="/" className="navBack">
      <ChevronCompactLeft className="navIcon" size={20} />
      <p>2020</p>
    </NavLink>
    <p className="navTitle">Covid_19</p>
    <div className="navAction">
      <MicFill className="navIcon" size={20} />
      <GearFill className="navIcon" size={20} />
    </div>
  </div>
);

export default Header;
