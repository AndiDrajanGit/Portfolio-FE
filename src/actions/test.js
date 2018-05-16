import * as types from './actionTypes';

export function setTest(data) {
  return {type: types.SET, data: data};
}

export function getTest() {
  return dispatch => {
    return fetch('http://localhost/portfolio_admin/wp-json/wp/v2/posts', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => dispatch(setTest(data)))
  }
}