/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */

/**
 * <Content />
 */
class Content extends Component {
  render() {
    const classes = classNames('content', this.props.className);

    return (
      <main className={classes} role="main">
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
