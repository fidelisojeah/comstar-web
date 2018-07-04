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
            className={`menu-item ${link.subMenu && 'menu-item-has-children'}`}
          >
            <NavLink
              to={`/${link.link}`}
            >
              {link.name}
            </NavLink>
            {link.subMenu &&
              <SubMenu
                menuLinks={link.subMenu}
              />
            }
          </li>
        ))}
    </ul>
  );
}
SubMenu.propTypes = {
  menuLinks: PropTypes.array.isRequired
}
export default SubMenu;
