import {
  WELCOME_HAS_ERRORED,
  WELCOME_IS_LOADING,
  WELCOME_FETCH_DATA_SUCCESS,
} from '../constants/action-types';
import { getWelcomeWords } from '../services/backend';

export function welcomeHasErrored(bool) {
  return {
    type: WELCOME_HAS_ERRORED,
    hasErrored: bool,
  };
}
export function welcomeIsLoading(bool) {
  return {
    type: WELCOME_IS_LOADING,
    isLoading: bool,
  };
}
export function welcomeFetchDataSuccess(data) {
  return {
    type: WELCOME_FETCH_DATA_SUCCESS,
    data,
  };
}

export function welcomeFetchData() {
  return (dispatch) => {
    dispatch(welcomeIsLoading(true));
    getWelcomeWords()
      .then((res) => {
        dispatch(welcomeIsLoading(false));
        dispatch(welcomeFetchDataSuccess(res.data));
        return res.data;
      })
      .catch(() => dispatch(welcomeHasErrored(true)));
  };
}
