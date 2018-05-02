import {GET, SET} from '../actions/actionTypes';

const defaultState = {
  data: []
};

export default function test(state = defaultState, action) {
  let newState;
  switch (action.type) {
    case GET:
      console.log('GETING');
      return action;
    case SET:
      newState = action;
      console.log('SETTING');
      return newState;
    default:
      return state;
  }
}