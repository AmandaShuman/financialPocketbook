import * as ActionTypes from './ActionTypes';

//then exports the income reducer, which takes the campsite section of the state and initializes it with the default function parameters syntax if it hasn't already been initialized 
export const income = (state = {
  isLoading: true,
  errMess: null,
  income: []
}, action) => {
  //then takes the action dispatched to it and depending on what action is creates and returns a new state
  switch (action.type) {
    case ActionTypes.ADD_INCOME:
      return { ...state, isLoading: false, errMess: null, income: action.payload };

    //actions update the reducers to change isLoading property to true
    case ActionTypes.INCOME_LOADING:
      return { ...state, isLoading: true, errMess: null, income: [] }

    //if there is an error, then the error message is set to true
    case ActionTypes.INCOME_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    //if none of the actions matched, then it returns the previous state w/o doing anything to it
    default:
      return state;
  }
};