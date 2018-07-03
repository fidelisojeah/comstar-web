import React from 'react';
import PropTypes from 'prop-types';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Nav from './Nav';
import HamBurger from './HamBurger';


function Header(props) {
  return (
    <header className="header">

      <div className="container">

        <div className="header--inner">
          <div className="row">

            <HeaderLeft />
            <HeaderRight
              companyInfo={props.companyInfo}
            />

          </div>
        </div>

      </div>

      <Nav
        menuItems={props.menuItems}
      />
      <HamBurger />
    </header>
  );
}
Header.propTypes = {
  companyInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  menuItems: PropTypes.array.isRequired
}
export default Header;
