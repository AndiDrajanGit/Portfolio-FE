import axios from 'axios';
import { createAction } from 'redux-actions';

import { API_URL } from 'constants/AppConsts';

export const get = createAction('projects/GET');
export const set = createAction('projects/SET');
export const getDetails = createAction('project/GET');
export const setDetails = createAction('project/SET');

export const getProjects = () => dispatch => {
  dispatch(get());
  axios
    .get(`${API_URL}/projects`)
    .then(response => dispatch(set(response.data)))
    .catch(err => {
      console.log('Error', err);
    });
};

export const getProjectDetails = id => dispatch => {
  dispatch(getDetails());
  axios
    .get(`${API_URL}/project?id=${id}`)
    .then(response => dispatch(setDetails(response.data)))
    .catch(err => {
      console.log('Error', err);
    });
};
