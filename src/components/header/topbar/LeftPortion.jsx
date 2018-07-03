import React from 'react';

function LeftPortion() {
  return (
    <div className="col-md-3">
      <div className="topbar--left">
        <div className="select_language">
          <button className="select_language--opener">
            <i className="select_language--opener_icon fa fa-globe-earth" />
            Language
          </button>
          <ul className="select_language--list">
            <li>
              English
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LeftPortion;
