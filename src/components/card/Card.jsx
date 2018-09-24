import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div
      className={`card ${props.className}`}
    >
      <i
        className={`icon ${props.iconName} ${props.iconClass}`}
      />
      <h3 className="card--title">
        {props.title}
      </h3>
      <div className="card--text">
        {props.textMsg}
      </div>
      {props.footer &&
        <footer className="card--footer card--more">
          {props.linkTo ?
            <Link
              className="link -white"
              to={props.linkTo}
            >
              {props.footer}
            </Link> :
            `${props.footer}`
          }
        </footer>
      }
    </div>
  );
}
Card.defaultProps = {
  className: undefined,
  iconName: undefined,
  iconClass: undefined,
  footer: undefined,
  linkTo: undefined
}
Card.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  iconClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  textMsg: PropTypes.string.isRequired,
  footer: PropTypes.string,
  linkTo: PropTypes.string,
}
export default Card;
