import axios from 'axios';
import { createAction } from 'redux-actions';

import { API_URL } from 'constants/AppConsts';

export const get = createAction('contact/GET');
export const set = createAction('contact/SET');

export const getContact = () => dispatch => {
  dispatch(get());
  axios
    .get(`${API_URL}/pages?slug=contact`)
    .then(response => dispatch(set(response.data[0].acf)))
    .catch(err => {
      console.log('Error', err);
    });
};
