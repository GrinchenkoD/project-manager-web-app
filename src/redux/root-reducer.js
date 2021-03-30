import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import errorReducer from './error/error-reducer';
import loadingReducer from './loading/loading-reducer';
import projectsReducer from './projects/project-reducers';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  errorReducer, //  МЕСТО ДЛЯ AUTH-REDUCER
);

const reducer = {
  loader: loadingReducer,
  error: errorReducer,
  auth: persistedAuthReducer,
  projects: projectsReducer,
};

export default reducer;
