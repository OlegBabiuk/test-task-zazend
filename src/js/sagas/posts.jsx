import { takeEvery, put } from 'redux-saga/effects';
import * as postsActions from '../ducks/posts';
import * as loaderActions from '../ducks/isShowPreloader';
import * as paginationAction from './pagination';
import getDate from '../api';

// Actions
const GET = 'GET_ALL_POSTS';

// Action creaters
export function getPosts() {
  return { type: GET };
}

// Worker saga
function* fetchAllPosts() {
  yield put(loaderActions.showLoader());
  const posts = yield getDate('/posts');
  yield put(postsActions.postsLoaded(posts));
  yield put(paginationAction.postsSelect());
}

// Watcher saga
export function* watchAllposts() {
  yield takeEvery(GET, fetchAllPosts);
}
