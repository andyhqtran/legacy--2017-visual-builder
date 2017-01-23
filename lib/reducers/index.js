/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import content from './content';
import elementMenu from './elementMenu';
import pagesMenu from './pagesMenu';
import responsiveMenu from './responsiveMenu';

const rootReducer = combineReducers({
  content,
  elementMenu,
  pagesMenu,
  responsiveMenu,
});

export default rootReducer;
