import { handleActions } from 'redux-actions';

import * as actions from 'actions/projects';

const defaultState = {
  data: [],
  project: {},
  isLoaded: false,
  isLoadedDetails: false
};

const projects = handleActions(
  {
    [actions.get]: state => ({
      ...state,
      isLoaded: false
    }),
    [actions.set]: (state, { payload }) => ({
      ...state,
      data: payload && payload !== 'undefined' ? payload : {},
      isLoaded: !!(payload && payload !== 'undefined')
    }),
    [actions.getDetails]: state => ({
      ...state,
      isLoadedDetails: false
    }),
    [actions.setDetails]: (state, { payload }) => ({
      ...state,
      project: payload && payload !== 'undefined' ? payload : {},
      isLoadedDetails: !!(payload && payload !== 'undefined')
    })
  },
  defaultState
);

export default projects;
