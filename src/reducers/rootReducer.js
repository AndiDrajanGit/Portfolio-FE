import { combineReducers } from 'redux';

import description from './description';
import skills from './skills';
import jobs from './jobs';
import projects from './projects';

const rootReducer = combineReducers({
  description,
  skills,
  jobs,
  projects
});

export default rootReducer;
