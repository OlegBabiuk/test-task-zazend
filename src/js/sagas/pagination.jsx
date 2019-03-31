import { takeEvery, put, select } from 'redux-saga/effects';
import * as loaderActions from '../ducks/isShowPreloader';
import * as postsActions from '../ducks/posts';
import * as paginationActions from '../ducks/pagination';
import { postsSlice, getPagesCount } from '../helpers';

// Actions
const SELECT = 'POSTS_SELECT';

// Action creaters
export function postsSelect() {
  return { type: SELECT };
}

// Worker saga
function* fetchFilterPosts() {
  const visiblePost = yield select(postsSlice);
  const totalPages = yield select(getPagesCount);
  yield put(paginationActions.saveTotalPages(totalPages));
  yield put(postsActions.postsFiltred(visiblePost));
  yield put(loaderActions.hiddenLoader());
}

// Watcher saga
export function* watchPostsFilter() {
  yield takeEvery(SELECT, fetchFilterPosts);
}
