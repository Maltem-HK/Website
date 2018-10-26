import axios from 'axios';
import config from '../config';

export function getWelcomeWords() {
  return axios({
    method: 'GET',
    url: `${config.backendURL}/welcomewords`,
  });
}

export function getSocialNetworks() {
  return axios({
    method: 'GET',
    url: `${config.backendURL}/socialnetworks`,
  });
}
