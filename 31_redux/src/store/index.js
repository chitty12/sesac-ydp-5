import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import depositReducer from './depositReducer';

// combineReducers: 여러 개의 리듀서를 하나로 합침.
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  balance: depositReducer,
});

export default rootReducer;
