/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * <Content />
 */
class Content extends Component {
  render() {
    const classes = classNames('content', this.props.className);

    return (
      <main
        className={classes}
        role="main"
        style={{
          width: `${this.props.size}%`,
        }}
      >
        Main
      </main>
    );
  }
}

Content.defaultProps = {
  className: null,
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
