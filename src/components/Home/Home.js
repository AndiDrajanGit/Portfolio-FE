import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './home.scss';

import logo from './logo.png';
import test from './test.svg';

class Home extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={cx(s.page, s.home)}>
        <img src={logo} />
      </div>
    );
  };
}


export default Home;