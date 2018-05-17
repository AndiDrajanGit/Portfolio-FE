import * as types from './actionTypes';
import {API_URL} from '../constants/AppConsts';

export function setTest(data) {
  return {type: types.SET, data: data};
}

export function getTest() {
  return dispatch => {
    return fetch(`${API_URL}/posts`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch(setTest(data)))
  }
}