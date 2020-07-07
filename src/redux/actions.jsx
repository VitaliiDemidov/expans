export const ADD_EXPANSE = 'ADD_EXPANSE';
export const SORT_EXPANSE = 'EDIT_EXPANSE';
export const REMOVE_EXPANSE = 'REMOVE_EXPANSE';
export const TOTAL = 'TOTAL';

export const addExpanse = (payload) => ({
  type: ADD_EXPANSE,
  payload,
});

export const removeExpanse = (payload) => ({
  type: REMOVE_EXPANSE,
  payload,
});

export const sortExpanses = (payload) => ({
  type: SORT_EXPANSE,
  payload,
});

export const setTotal = () => {
  return async (dispatch) => {
    const response = await fetch(
      `http://data.fixer.io/api/latest?access_key=a683de89039615c4e5549e72e783c63f&symbols=PLN`
    );
    const json = await response.json();
    const rates = json.rates;
    dispatch({
      type: TOTAL,
      payload: rates,
    });
  };
};
