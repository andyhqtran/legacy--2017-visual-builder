/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * <ButtonGroup />
 */
const ButtonGroup = (props) => {
  const classes = classNames({
    'button-group': true,
    'button-group--vertical': props.vertical,
  }, props.className);

  return <div className={classes}>{props.children}</div>;
};

ButtonGroup.defaultProps = {
  className: '',
  children: false,
  vertical: false,
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  vertical: PropTypes.bool,
};

export default ButtonGroup;
