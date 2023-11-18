import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '@/redux/slices/authSlice';
import serviceReducer from '@/redux/slices/serviceSlice';
import utilityReducer from '@/redux/slices/utilitySlice';
import {
	Action,
	combineReducers,
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { authApi } from '../services/auth.service';
import { budgetApi } from '../services/budget.service';
import { electricityApi } from '../services/electricity.service';
import { notificationsApi } from '../services/notifications.service';
import { transactionsApi } from '../services/transactions.service';
import { userApi } from '../services/user.service';
import { utilitiesApi } from '../services/utilities.service';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  utility: utilityReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = configureStore({
  reducer: {
    app: persistedReducer,
    utility: serviceReducer,
    [authApi.reducerPath]: authApi.reducer,
    [electricityApi.reducerPath]: electricityApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [utilitiesApi.reducerPath]: utilitiesApi.reducer,
    [budgetApi.reducerPath]: budgetApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      authApi.middleware,
      electricityApi.middleware,
      userApi.middleware,
      transactionsApi.middleware,
      notificationsApi.middleware,
      utilitiesApi.middleware,
      budgetApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const persistor = persistStore(store);
