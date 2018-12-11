import { combineReducers } from 'redux';

import description from './description';
import skills from './skills';
import jobs from './jobs';

const rootReducer = combineReducers({
  description,
  skills,
  jobs
});

export default rootReducer;
