import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import * as postActions from '../ducks/currentPost';
import * as loaderActions from '../ducks/isShowPreloader';
import BASE_URL from './api';

// Actions
const GET = 'GET_POST';

// Action creaters
export function getPost(id) {
  return { type: GET, id };
}

// Worker saga
export function* fetchPost(post) {
  yield put(loaderActions.showLoader());
  const postId = post.id;
  const postDetail = yield axios.get(`${BASE_URL}/posts/${postId}`)
    .then(result => (result.data));
  const author = yield axios.get(`${BASE_URL}/users/${postDetail.userId}`)
    .then(result => (result.data));
  const comments = yield axios.get(`${BASE_URL}/comments?postId=${postId}`)
    .then(result => (result.data));
  yield put(postActions.postLoaded({ postDetail, author, comments }));
  yield put(loaderActions.hiddenLoader());
}

// Watcher saga
export function* watchPost() {
  yield takeEvery(GET, fetchPost);
}
