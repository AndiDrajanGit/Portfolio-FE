import axios from 'axios';
import { createAction } from 'redux-actions';

import { API_URL } from 'constants/AppConsts';

export const get = createAction('skills/GET');
export const set = createAction('skills/SET');

export const getSkills = () => dispatch => {
  dispatch(get());
  axios
    .get(`${API_URL}/skills?per_page=100`)
    .then(response => dispatch(set(response.data)))
    .catch(err => {
      console.log('Error', err);
    });
};
