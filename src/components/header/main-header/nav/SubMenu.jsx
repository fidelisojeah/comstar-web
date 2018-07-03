import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function SubMenu(props) {
  return (
    <ul className="sub-menu">
      {props.menuLinks &&
        props.menuLinks.map(link => (
          <li
            key={link.id}
            className="menu-item"
          >
            <NavLink
              to={`/${link.link}`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}
SubMenu.propTypes = {
  menuLinks: PropTypes.array.isRequired
}
export default SubMenu;
