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
 * <Header />
 */
class Header extends Component {
  render() {
    const classes = classNames('header', this.props.className);

    return (
      <header className={classes}>
        <div className="header__group">
          <div className="pages-menu">
            <span className="ion ion-ios-albums" />
          </div>
          <div className="pages-menu">
            <span className="ion ion-crop" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
