import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchIncome = () => dispatch => {

  //whenever we are fetching the campsite's data, we dispatch an action to say we are loading that data
  dispatch(incomeLoading());

  return fetch(baseUrl + 'income')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      })
    .then(response => response.json())
    .then(income => dispatch(addIncome(income)))
    .catch(error => dispatch(incomeFailed(error.message)));
};

//actions that are returned based on what is happening - see income.js for more (in redux folder)
export const incomeLoading = () => ({
  type: ActionTypes.INCOME_LOADING
});

export const incomeFailed = errMess => ({
  type: ActionTypes.INCOME_FAILED,
  payload: errMess
});

export const addIncome = income => ({
  type: ActionTypes.ADD_INCOME,
  payload: income
});