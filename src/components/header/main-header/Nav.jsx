import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import SubMenu from './nav/SubMenu';

function Nav(props) {
  return (
    <nav className="header_nav -wide d-none d-lg-block d-xl-block">
      <div className="header_nav--inner">
        <ul className="menu">
          {props.menuItems.map(menuItem =>
            (
              [<li
                key={menuItem.id}
                className="menu-item">
                <NavLink
                  to={`/${menuItem.link}`}
                >
                  {menuItem.name}
                </NavLink>
                {menuItem.subMenu &&
                  <SubMenu
                    menuLinks={menuItem.subMenu}
                  />
                }
              </li>,
                " "
              ]
            )
          )}
        </ul>
      </div>
    </nav>);
}
Nav.propTypes = {
  menuItems: PropTypes.array.isRequired
}
export default Nav;
