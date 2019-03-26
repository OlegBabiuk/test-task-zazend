import { all } from 'redux-saga/effects';
import { watchAllposts, watchPost } from './allSagas';

function* mainSaga() {
  yield all([watchAllposts(), watchPost()]);
}

export default mainSaga;
