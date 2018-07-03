import React from 'react';
import PropTypes from 'prop-types';

function HeaderRight(props) {
  return (
    <div className="col-xl-10 col-lg-12 d-none d-lg-block d-xl-block">
      <div className="header--right">
        <div className="header_contacts">
          {props.companyInfo &&
            props.companyInfo.map(info => (
              <div
                className="header_contacts--item"
                key={info.id}
              >
                <div className="contact_mini">
                  <i
                    className={`contact_mini--icon fa fa-${info.icon}`}
                  />
                  <strong>
                    {info.strong}
                  </strong>
                  <span>
                    {info.other}
                  </span>
                </div>
              </div>
            ))}
        </div>
        {/* Get Quote */}
      </div>
    </div>
  );
}
HeaderRight.propTypes = {
  companyInfo: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default HeaderRight;
