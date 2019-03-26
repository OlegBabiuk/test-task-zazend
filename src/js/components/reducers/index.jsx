import { combineReducers } from 'redux';
import posts from './posts';
import currentPost from './currentPost';
import isOpenMobileNav from './isOpenMobileNav';
import isCurrentPostLoaded from './isCurrentPostLoaded';

export default combineReducers({
  posts,
  currentPost,
  isOpenMobileNav,
  isCurrentPostLoaded,
});
