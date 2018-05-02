import * as types from './actionTypes';

export function setTest(data) {
  return {type: types.SET, data: data};
}

export function getTest() {
  return dispatch => {
    return fetch('https://bws.rocks/wp-json/wp/v2/team', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch(setTest(data)))
  }
}