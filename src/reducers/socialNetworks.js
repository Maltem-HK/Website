import {
  SOCIAL_NETWORKS_HAS_ERRORED,
  SOCIAL_NETWORKS_IS_LOADING,
  SOCIAL_NETWORKS_FETCH_DATA_SUCCESS,
} from '../constants/action-types';

export const initialState = {
  socialNetworks: {},
  isLoading: false,
  hasErrored: false,
};

export default function socialNetworks(state = initialState, action = {}) {
  switch (action.type) {
    case SOCIAL_NETWORKS_FETCH_DATA_SUCCESS:
      return { ...state, socialNetworks: action.data };
    case SOCIAL_NETWORKS_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SOCIAL_NETWORKS_HAS_ERRORED:
      return { ...state, hasErrored: action.hasErrored };
    default:
      return state;
  }
}
