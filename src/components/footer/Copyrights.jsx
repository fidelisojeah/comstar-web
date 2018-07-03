import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../public/mstile-310x310.png'

function Copyrights(props) {
  return (
    <div className="footer_copyrights">
      <div className="footer_copyrights--container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="footer_copyrights--item">
              <div className="footer_copyrights--logo">
                <Link
                  to="/"
                >
                  <img
                    src={logo}
                    alt="Comstar Insurance Brokers Ltd."
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="footer_copyrights--item">
              <p className="footer_copyrights--item_copyrights">
                Comstar Insurance Brokers Ltd. &copy; All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Copyrights;
