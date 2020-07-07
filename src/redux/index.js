import { ADD_EXPANSE, SORT_EXPANSE, REMOVE_EXPANSE, TOTAL } from './actions';

const initialState = [];

export const expanseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPANSE:
      return [...state, action.payload];
    case SORT_EXPANSE:
      return state.filter((expanse) => expanse.date === action.payload);
    case REMOVE_EXPANSE:
      return state.filter((expanse) => expanse !== state[action.payload]);
    default:
      return state;
  }
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL:
      return {
        ...state,
        ...{
          total: action.payload.PLN,
        },
      };
    default:
      return state;
  }
};
