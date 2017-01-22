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
import Header from '../../components/Header';

/**
 * <Application />
 */
const Application = props => (
  <div className="app">
    <Header />
    <Content elements={props.elements} />
    <ElementMenu
      addElement={props.actions.addElement}
      changeMenu={props.actions.changeElementMenu}
      status={props.status}
      toggleMenu={props.actions.toggleElementMenu}
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
  status: state.elementMenu.status,
  view: state.elementMenu.view,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MenuActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
