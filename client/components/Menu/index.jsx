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

/**
 * <Menu />
 */
class Menu extends Component {
  componentDidMount() {
    console.log(this.props.items);
  }

  _renderMenuGroup(group, i) {
    return (
      <dl className="menu__group" key={`menu-group-key-${i}`}>
        <dt className="menu__title">{group.title}</dt>
        <dd className="menu__group-content">
          {group.items.map(this._renderMenuGroupItem, this)}
        </dd>
      </dl>
    );
  }

  _renderMenuGroupItem(item, i) {
    if (item.to) {
      return (
        <Button
          className="menu__item"
          key={`menu-group-key-${i}`}
          onClick={() => this.props.changeMenu(item.to)}
        >
          <span>{item.name}</span>
          <i className="ion ion-arrow-right-b" />
        </Button>
      );
    }

    return <Button className="menu__item" key={`menu-item-key-${i}`}>{item.name}</Button>;
  }

  render() {
    const classes = classNames({
      menu: true,
      'menu--active': this.props.status,
    }, this.props.className);

    return (
      <nav className={classes}>
        {this.props.items[this.props.view].map(this._renderMenuGroup, this)}
      </nav>
    );
  }
}

Menu.defaultProps = {
  className: '',
  items: [],
  status: false,
};

Menu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            action: PropTypes.func.isRequired,
            name: PropTypes.string.isRequired,
            to: PropTypes.number,
          }),
        ).isRequired,
      }),
    ),
  ),
  status: PropTypes.bool,
};

export default Menu;
