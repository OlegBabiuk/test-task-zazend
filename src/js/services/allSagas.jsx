import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function* fetchAllPosts() {
  const posts = yield axios.get(`${BASE_URL}/posts`)
    .then(result => (result.data));
  yield put({ type: 'POSTS_LOADED', posts });
}

function* fetchPost(post) {
  yield put({ type: 'SHOW_CURRENT_POST', show: false });
  const postId = post.id;
  const postDetail = yield axios.get(`${BASE_URL}/posts/${postId}`)
    .then(result => (result.data));
  const author = yield axios.get(`${BASE_URL}/users/${postDetail.userId}`)
    .then(result => (result.data));
  const comments = yield axios.get(`${BASE_URL}/comments?postId=${postId}`)
    .then(result => (result.data));
  yield put({ type: 'POST_LOADED', post: { postDetail, author, comments } });
  yield put({ type: 'SHOW_CURRENT_POST', show: true });
}

export function* watchAllposts() {
  yield takeEvery('GET_ALL_POSTS', fetchAllPosts);
}

export function* watchPost() {
  yield takeEvery('GET_POST', fetchPost);
}
