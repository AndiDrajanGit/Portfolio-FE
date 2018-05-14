import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './home.scss';

class Home extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={cx(s.page, s.home)}>
        home
      </div>
    );
  };
}


export default Home;