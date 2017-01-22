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
import Content from '../../components/Content';
import ElementMenu from '../../components/ElementMenu';

/**
 * <Application />
 */
const Application = props => (
  <div className="app">
    <Content elements={props.elements} />
    <ElementMenu
      addElement={props.actions.addElement}
      changeMenu={props.actions.changeMenu}
      status={props.status}
      toggleMenu={props.actions.toggleMenu}
      view={props.view}
    />
  </div>
);

Application.propTypes = {
  actions: PropTypes.object.isRequired,
  elements: PropTypes.array.isRequired,
  status: PropTypes.bool.isRequired,
  view: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  elements: state.content.elements,
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
