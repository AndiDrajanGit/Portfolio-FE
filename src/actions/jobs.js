import axios from 'axios';
import { createAction } from 'redux-actions';

import { API_URL } from 'constants/AppConsts';

export const get = createAction('jobs/GET');
export const set = createAction('jobs/SET');

export const getJobs = () => dispatch => {
  dispatch(get());
  axios
    .get(`${API_URL}/jobs`)
    .then(response => dispatch(set(response.data)))
    .catch(err => {
      console.log('Error', err);
    });
};
