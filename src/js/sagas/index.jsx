import { all } from 'redux-saga/effects';
import { watchAllposts } from './posts';
import { watchPost } from './currentPost';

function* rootSaga() {
  yield all([watchAllposts(), watchPost()]);
}

export default rootSaga;
