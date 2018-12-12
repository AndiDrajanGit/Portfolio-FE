import { handleActions } from 'redux-actions';

import * as actions from 'actions/projects';

const defaultState = {
  data: {},
  isLoaded: false,
  isPending: false
};

const projects = handleActions(
  {
    [actions.get]: state => ({
      ...state,
      isLoaded: false,
      isPending: true
    }),
    [actions.set]: (state, { payload }) => ({
      ...state,
      data: payload && payload !== 'undefined' ? payload : {},
      isLoaded: !!(payload && payload !== 'undefined'),
      isPending: false
    })
  },
  defaultState
);

export default projects;
