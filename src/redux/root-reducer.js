import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import errorReducer from './error/error-reducer';
import loadingReducer from './loading/loading-reducer';
import projectsReducer from './projects/project-reducers';
import authReducer from './auth/auth-reducers';
import sprintsReducer from './sprints/sprint-reducers';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user', 'isAuthentificated'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const reducer = {
  loader: loadingReducer,
  error: errorReducer,
  auth: persistedAuthReducer,
  projects: projectsReducer,
  sprints: sprintsReducer,
};

export default reducer;
