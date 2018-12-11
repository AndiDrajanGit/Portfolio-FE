import axios from 'axios';
import { createAction } from 'redux-actions';

import { API_URL } from 'constants/AppConsts';

export const get = createAction('description/GET');
export const set = createAction('description/SET');

export const getDescription = () => dispatch => {
  dispatch(get());
  axios
    .get(`${API_URL}/pages?slug=about`)
    .then(response => dispatch(set(response.data[0].acf)))
    .catch(err => {
      console.log('Error', err);
    });
};
