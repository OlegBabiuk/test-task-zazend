import { takeEvery, put, select } from 'redux-saga/effects';
import * as loaderActions from '../ducks/isShowPreloader';
import * as postsActions from '../ducks/posts';
import * as paginationActions from '../ducks/pagination';

// Actions
const FILTER = 'POSTS_FILTER';

// Action creaters
export function postsFilter() {
  return { type: FILTER };
}

// Selectors
function postsSlice(state) {
  const { posts, pagination } = state;
  const finishPosition = pagination.currentPage * pagination.displayed;
  const startPosition = finishPosition - pagination.displayed;
  return posts.allPosts.slice(startPosition, finishPosition);
}

function getPagesCount(state) {
  const { posts, pagination } = state;
  const numberOfPosts = posts.allPosts.length;
  return Math.ceil(numberOfPosts / pagination.displayed);
}

// Worker saga
function* fetchFilterPosts() {
  const visiblePost = yield select(postsSlice);
  const totalPages = yield select(getPagesCount);
  yield put(paginationActions.getTotalPages(totalPages));
  yield put(postsActions.postsFiltred(visiblePost));
  yield put(loaderActions.hiddenLoader());
}

// Watcher saga
export function* watchPostsFilter() {
  yield takeEvery(FILTER, fetchFilterPosts);
}
