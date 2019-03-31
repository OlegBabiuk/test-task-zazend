import { takeEvery, put } from 'redux-saga/effects';
import * as postActions from '../ducks/currentPost';
import * as loaderActions from '../ducks/isShowPreloader';
import getDate from '../api';

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
  const postDetail = yield getDate('/posts/', postId);
  const author = yield getDate('/users/', postDetail.userId);
  const comments = yield getDate('/comments?postId=', postId);
  yield put(postActions.postLoaded({ postDetail, author, comments }));
  yield put(loaderActions.hiddenLoader());
}

// Watcher saga
export function* watchPost() {
  yield takeEvery(GET, fetchPost);
}
