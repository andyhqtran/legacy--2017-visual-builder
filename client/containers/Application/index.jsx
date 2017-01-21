/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import * as MenuActions from '../../actions';
import ElementMenu from '../../components/ElementMenu';

/**
 * <Application />
 */

const Application = props => (
  <div className="app">
    <ElementMenu
      changeMenu={props.actions.changeMenu}
      status={props.status}
      toggleMenu={props.actions.toggleMenu}
      view={props.view}
    />
  </div>
);

Application.propTypes = {
  actions: PropTypes.object.isRequired,
  status: PropTypes.bool.isRequired,
  view: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  status: state.pageMenu.status,
  view: state.pageMenu.view,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MenuActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
