import { combineReducers } from 'redux';
import { expanseReducer, dataReducer } from './index';

export const rootReducer = combineReducers({
  expanse: expanseReducer,
  data: dataReducer,
});
