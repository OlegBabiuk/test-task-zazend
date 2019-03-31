import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSagas from '../sagas';

import posts from '../ducks/posts';
import currentPost from '../ducks/currentPost';
import isOpenMobileNav from '../ducks/isOpenMobileNav';
import isShowPreloader from '../ducks/isShowPreloader';
import pagination from '../ducks/pagination';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const rootReduser = combineReducers({
    posts,
    currentPost,
    isOpenMobileNav,
    isShowPreloader,
    pagination,
  });

  const store = createStore(
    rootReduser,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSagas);

  return store;
};

export default configureStore;
