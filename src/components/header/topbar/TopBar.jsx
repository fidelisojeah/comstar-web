import React from 'react';
import PropTypes from 'prop-types';

import LeftPortion from './LeftPortion';
import RightPortion from './RightPortion';

function TopBar(props) {
  return (
    <div className="topbar d-none d-lg-block d-xl-block">
      <div className="container">
        <div className="row">
          <LeftPortion />
          <RightPortion
            socialLinks={props.socialLinks}
          />
        </div>
      </div>
    </div>
  );
}
TopBar.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default TopBar;
