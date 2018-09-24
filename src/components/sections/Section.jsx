import React from 'react';
import PropTypes from 'prop-types';

function Section(props) {
  return (
    <section
      className={`section ${props.className}`}
    >
      <div className="container">
        {props.children}
      </div>
    </section>
  );
}
Section.defaultProps = {
  className: undefined
}
Section.propTypes = {
  className: PropTypes.string
}
export default Section;
