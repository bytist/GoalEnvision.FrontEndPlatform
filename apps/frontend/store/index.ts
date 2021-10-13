import { MiddlewareArray, configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import { createReducer } from './modules/create'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
  createState: createReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(thunk, logger),
});

export default store
