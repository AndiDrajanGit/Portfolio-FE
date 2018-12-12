import axios from 'axios';
import { createAction } from 'redux-actions';

import { API_URL } from 'constants/AppConsts';

export const get = createAction('projects/GET');
export const set = createAction('projects/SET');

export const getProjects = () => dispatch => {
  dispatch(get());
  axios
    .get(`${API_URL}/projects`)
    .then(response => dispatch(set(response.data)))
    .catch(err => {
      console.log('Error', err);
    });
};
