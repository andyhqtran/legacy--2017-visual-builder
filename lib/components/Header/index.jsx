/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import Button from '../Button';
import PagesMenu from '../PagesMenu';
import ResponsiveMenu from '../ResponsiveMenu';

/**
 * <Header />
 */
class Header extends Component {
  render() {
    const classes = classNames('header', this.props.className);

    return (
      <header className={classes}>
        <div className="header__group">
          <PagesMenu
            toggleMenu={this.props.pagesMenu.actions.toggleMenu}
            status={this.props.pagesMenu.state.status}
          />
          <ResponsiveMenu
            toggleMenu={this.props.responsiveMenu.actions.toggleMenu}
            status={this.props.responsiveMenu.state.status}
          />
        </div>
        <div className="header__group">
          <Button>
            <span className="ion ion-ios-cloud-download" />
          </Button>
          <Button>
            <span className="ion ion-gear-a" />
          </Button>
        </div>
      </header>
    );
  }
}

export default Header;
