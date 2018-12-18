import { combineReducers } from 'redux';

import description from './description';
import skills from './skills';
import jobs from './jobs';
import projects from './projects';
import contact from './contact';

const rootReducer = combineReducers({
  description,
  skills,
  jobs,
  projects,
  contact
});

export default rootReducer;
