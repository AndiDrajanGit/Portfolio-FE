import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './test.scss';

class Test extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={s.test}>
        test
      </div>
    );
  };
}


export default Test;