import { handleActions } from 'redux-actions';

import * as actions from 'actions/contact';

const defaultState = {
  data: {},
  isLoaded: false
};

const contact = handleActions(
  {
    [actions.get]: state => ({
      ...state,
      isLoaded: false
    }),
    [actions.set]: (state, { payload }) => ({
      ...state,
      data: payload && payload !== 'undefined' ? payload : {},
      isLoaded: !!(payload && payload !== 'undefined')
    })
  },
  defaultState
);

export default contact;
