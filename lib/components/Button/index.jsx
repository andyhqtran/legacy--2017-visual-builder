/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * <Button />
 */
const Button = (props) => {
  const classes = classNames({
    button: true,
    'button--default': props.default,
    'button--elevate': props.elevate,
    'button--primary': props.primary,
  }, props.className);

  return (
    <button
      className={classes}
      onClick={props.onClick}
      style={props.style}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  children: false,
  default: false,
  elevate: false,
  onClick: noop,
  primary: false,
  style: {},
  type: 'button',
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  default: PropTypes.bool,
  elevate: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
};

export default Button;
