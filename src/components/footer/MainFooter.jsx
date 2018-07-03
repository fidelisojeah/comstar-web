import React from 'react';

import AboutFooter from './AboutFooter';

function MainFooter(props) {
  const footerClass = 'col-xl-4 col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-12';
  return (<div className="footer_main">
    <div className="row">
      <div
        className={footerClass}
      >
        <div className="footer_main--column">
          <strong className="footer_main--column_title">
            About Us
          </strong>
          <AboutFooter />
        </div>
      </div>
      <div
        className={footerClass}
      >
        <div className="footer_main--column">
          <strong className="footer_main--column_title">
            Latest Blog Posts
          </strong>
          <div className="footer_navigation">
          </div>
        </div>
      </div>
      <div className="clearfix d-none d-md-block" />
      {/* <div
        className={footerClass}
      >
        <div className="footer_main--column">
          <strong className="footer_main--column_title">

          </strong>
        </div>
      </div> */}
      <div
        className={footerClass}
      >
        <div className="footer_main--column">
          <strong className="footer_main--column_title">
            Contact Info
          </strong>
          <div className="footer_contact_info">
          </div>
        </div>
      </div>
    </div>
  </div>);
}
export default MainFooter;
