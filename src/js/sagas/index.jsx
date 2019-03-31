import { all } from 'redux-saga/effects';
import { watchAllposts } from './posts';
import { watchPost } from './currentPost';
import { watchPostsFilter } from './pagination';

function* rootSaga() {
  yield all([
    watchAllposts(),
    watchPostsFilter(),
    watchPost(),
  ]);
}

export default rootSaga;
