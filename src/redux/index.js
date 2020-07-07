import { ADD_EXPANSE, SORT_EXPANSE, REMOVE_EXPANSE, TOTAL } from './actions';

const initialState = [
  {
    date: '2020-07-01',
    number: '12',
    currency: 'PLN',
    name: 'Beer',
  },
  {
    date: '2020-07-02',
    number: '2',
    currency: 'PLN',
    name: 'Milk',
  },
  {
    date: '2020-07-04',
    number: '12',
    currency: 'PLN',
    name: 'Cola',
  },
];

export const expanseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPANSE:
      return [...state, action.payload];
    case SORT_EXPANSE:
      const sorted = state.filter((expanse) => {
        return expanse.date === action.payload;
      });
      return sorted;
    case REMOVE_EXPANSE:
      const filtered = state.filter(
        (expanse) => expanse !== state[action.payload]
      );
      return filtered;
    default:
      return state;
  }
};

export const dataReducer = (state = [], action) => {
  switch (action.type) {
    case TOTAL:
      return {
        ...state,
        ...{
          total: action.payload,
        },
      };
    default:
      return state;
  }
};
