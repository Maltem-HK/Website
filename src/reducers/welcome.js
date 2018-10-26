import {
  WELCOME_HAS_ERRORED,
  WELCOME_IS_LOADING,
  WELCOME_FETCH_DATA_SUCCESS,
} from '../constants/action-types';

export const initialState = {
  words: [],
  isLoading: false,
  hasErrored: false,
};

export default function welcome(state = initialState, action = {}) {
  switch (action.type) {
    case WELCOME_FETCH_DATA_SUCCESS:
      return { ...state, words: action.data };
    case WELCOME_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case WELCOME_HAS_ERRORED:
      return { ...state, hasErrored: action.hasErrored };
    default:
      return state;
  }
}
