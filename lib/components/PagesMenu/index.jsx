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
  _getMenuItems() {
    return [
      [
        {
          title: 'Pages',
          items: [
            {
              action: () => console.log('Page 1'),
              name: 'Page 1',
            },
            {
              action: () => console.log('Page 2'),
              name: 'Page 2',
            },
            {
              action: () => console.log('Page 3'),
              name: 'Page 3',
            },
          ],
        },
      ],
    ];
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
          items={this._getMenuItems()}
          status={this.props.status}
          childrenLocation="bottom"
        >
          <Button block>Add Page</Button>
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
