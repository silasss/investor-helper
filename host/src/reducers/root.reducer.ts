import { combineReducers } from '@reduxjs/toolkit';
import { staticReducers } from '@/app/store';

// store.replaceReducer(createReducer())

// export default function createReducer<T>(asyncReducers: ReducerWithInitialState<T>) {
export default function createReducer(asyncReducers: any) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}
