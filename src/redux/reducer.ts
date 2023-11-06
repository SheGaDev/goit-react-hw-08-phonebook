import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './slice/contacts-slice';
import { authReducer } from './slice/auth-slice';
import { filterReducer } from './slice/filter-slice';
import { userReducer } from './slice/user-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
  user: userReducer,
});

export const reducer = persistReducer(persistConfig, rootReducer);
