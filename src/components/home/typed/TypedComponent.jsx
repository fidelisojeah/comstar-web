import React, { PureComponent } from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';



class TypedComponent extends PureComponent {
  static defaultProps = {
    className: undefined,
    strings: [
      'Protect your <strong>family</strong> from risks',
      'Protect your <strong>property</strong> from risks'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 0,
    loop: false
  }
  static propTypes = {
    className: PropTypes.string,
    strings: PropTypes.arrayOf(PropTypes.string),
    typeSpeed: PropTypes.number,
    backSpeed: PropTypes.number,
    startDelay: PropTypes.number,
  }

  componentDidMount() {
    const { strings, typeSpeed, backSpeed, startDelay, loop } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      startDelay,
      loop
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
    this.typed.start();
  }
  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }
  render() {
    const { props } = this;
    return (
      <span
        style={{ whiteSpace: 'pre' }}
        ref={(el) => { this.el = el; }}
        className={props.className}
      />
    );
  }
}
export default TypedComponent;
