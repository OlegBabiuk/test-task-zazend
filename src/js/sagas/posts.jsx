import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import * as postsActions from '../ducks/posts';
import * as loaderActions from '../ducks/isShowPreloader';
import * as paginationAction from './pagination';
import BASE_URL from './api';

// Actions
const GET = 'GET_ALL_POSTS';

// Action creaters
export function getPosts() {
  return { type: GET };
}

// Worker saga
function* fetchAllPosts() {
  yield put(loaderActions.showLoader());
  const posts = yield axios.get(`${BASE_URL}/posts`)
    .then(result => (result.data));
  yield put(postsActions.postsLoaded(posts));
  yield put(paginationAction.postsFilter());
}

// Watcher saga
export function* watchAllposts() {
  yield takeEvery(GET, fetchAllPosts);
}
