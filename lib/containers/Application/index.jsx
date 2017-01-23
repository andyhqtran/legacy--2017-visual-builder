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
    <Header
      pagesMenu={{
        actions: {
          toggleMenu: props.actions.togglePagesMenu,
        },
        state: {
          status: props.pagesMenuStatus,
        },
      }}
      responsiveMenu={{
        actions: {
          changeContentSize: props.actions.changeContentSize,
          decreaseContentSize: props.actions.decreaseContentSize,
          increaseContentSize: props.actions.increaseContentSize,
          toggleMenu: props.actions.toggleResponsiveMenu,
        },
        state: {
          contentSize: props.contentSize,
          status: props.responsiveMenuStatus,
        },
      }}
    />
    <Content elements={props.elements} />
    <ElementMenu
      addElement={props.actions.addElement}
      changeMenu={props.actions.changeElementMenu}
      status={props.elementMenuStatus}
      toggleMenu={props.actions.toggleElementMenu}
      view={props.view}
    />
  </div>
);

Application.propTypes = {
  actions: PropTypes.object.isRequired,
  contentSize: PropTypes.number,
  elements: PropTypes.array.isRequired,
  elementMenuStatus: PropTypes.bool.isRequired,
  pagesMenuStatus: PropTypes.bool.isRequired,
  responsiveMenuStatus: PropTypes.bool.isRequired,
  view: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  contentSize: state.content.size,
  elements: state.content.elements,
  elementMenuStatus: state.elementMenu.status,
  pagesMenuStatus: state.pagesMenu.status,
  responsiveMenuStatus: state.responsiveMenu.status,
  view: state.elementMenu.view,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MenuActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
