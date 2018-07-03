import React from 'react';
// import PropTypes from 'prop-types';

import Copyrights from './Copyrights';
import MainFooter from './MainFooter';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer--bg"></div>
      <div className="footer--inner">
        <div className="container">
          <MainFooter />
          <Copyrights />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
