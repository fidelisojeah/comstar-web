import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../../../logo.svg';

function HeaderLeft() {
  return (
    <div className="col-xl-2 col-lg-12">
      <div className="header--logo logo">
        <Link
          to="/"
        >
          <img src={logo} alt="comstar logo" />
        </Link>
      </div>
    </div>
  );
}
export default HeaderLeft;
