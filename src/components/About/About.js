import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './about.scss';

class About extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={cx(s.page, s.about)}>
        ABOUT
      </div>
    );
  };
}


export default About;