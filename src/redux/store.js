import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import todoReducer from './slices/todo';
import uiReducer from './slices/ui';
import userReducer from './slices/user';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';

const persistConfig = {
  key: 'root2',
  storage,
  stateReconciler: autoMergeLevel1,
};
const reducers = combineReducers({
  todo: todoReducer,
  ui: uiReducer,
  user: userReducer,
});
const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// Usage: <PersistGate loading={null} persistor={persistor}><App /></PersistGate>
// This is not currently used, not imported anywhere, not in main.js or App.js,
// because it causes the entire app to delay loading until the localStorage is ready
// This creates an unacceptably long delay in loading the site! Very bad UX!
// However, this line is still very much necessary. Do not comment-out or remove,
// because it mutates the store and allows persistedReducers to work correctly.
export const persistor = persistStore(store);
