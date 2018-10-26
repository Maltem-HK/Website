import {
  SOCIAL_NETWORKS_HAS_ERRORED,
  SOCIAL_NETWORKS_IS_LOADING,
  SOCIAL_NETWORKS_FETCH_DATA_SUCCESS,
} from '../constants/action-types';
import { getSocialNetworks } from '../services/backend';

export function socialNetworksHasErrored(bool) {
  return {
    type: SOCIAL_NETWORKS_HAS_ERRORED,
    hasErrored: bool,
  };
}
export function socialNetworksIsLoading(bool) {
  return {
    type: SOCIAL_NETWORKS_IS_LOADING,
    isLoading: bool,
  };
}
export function socialNetworksFetchDataSuccess(data) {
  return {
    type: SOCIAL_NETWORKS_FETCH_DATA_SUCCESS,
    data,
  };
}
export function socialNetworksFetchData() {
  return (dispatch) => {
    dispatch(socialNetworksIsLoading(true));
    getSocialNetworks()
      .then((res) => {
        dispatch(socialNetworksIsLoading(false));
        dispatch(socialNetworksFetchDataSuccess(res.data[0]));
        return res.data;
      })
      .catch(() => dispatch(socialNetworksHasErrored(true)));
  };
}
