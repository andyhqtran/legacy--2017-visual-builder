/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import content from './content';
import pageMenu from './pageMenu';

const rootReducer = combineReducers({
  content,
  pageMenu,
});

export default rootReducer;
