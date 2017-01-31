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
 * <PagesMenu />
 */
class PagesMenu extends Component {
  _renderMenuGroupItem(item, i) {
    return (
      <Button
        className="menu__item"
        key={`menu-group-key-${i}`}
      >
        <span>{item.name}</span>
        <i
          className="ion ion-close-circled"
          onClick={() => this.props.deletePage(item.id)}
        />
      </Button>
    );
  }

  render() {
    const classes = classNames({
      'pages-menu': true,
      'pages-menu--active': this.props.status,
    }, this.props.className);

    return (
      <div className={classes}>
        <Button
          onClick={() => this.props.toggleMenu(!this.props.status)}
        >
          <i className="ion ion-ios-albums" />
        </Button>
        <Menu
          status={this.props.status}
          childrenLocation="bottom"
        >
        <dl className="menu__group">
          <dt className="menu__title">Pages</dt>
          <dd className="menu__group-content">
            {this.props.pages.map(this._renderMenuGroupItem, this)}
          </dd>
        </dl>
          <Button block onClick={() => this.props.addPage()}>Add Page</Button>
        </Menu>
      </div>
    );
  }
}

PagesMenu.defaultProps = {
  className: undefined,
  status: false,
};

PagesMenu.propTypes = {
  className: PropTypes.string,
  status: PropTypes.bool,
};

export default PagesMenu;
