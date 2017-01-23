/**
 * Internal dependencies
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import Button from '../Button';
import Menu from '../Menu';

/**
 * <ResponsiveMenu />
 */
class ResponsiveMenu extends Component {
  render() {
    const classes = classNames({
      'responsive-menu': true,
      'responsive-menu--active': this.props.status,
    }, this.props.className);

    return (
      <div className={classes}>
        <Button
          onClick={() => this.props.toggleMenu(!this.props.status)}
        >
          <i className="ion ion-crop" />
        </Button>
        <Menu
          status={this.props.status}
        >
          <dl className="menu__group">
            <dt className="menu__title">Responsive Settings</dt>
            <dd className="menu__group-content">
              Slider
            </dd>
          </dl>
        </Menu>
      </div>
    );
  }
}

ResponsiveMenu.defaultProps = {
  className: undefined,
  status: false,
};

ResponsiveMenu.propTypes = {
  className: PropTypes.string,
  status: PropTypes.bool,
};

export default ResponsiveMenu;
