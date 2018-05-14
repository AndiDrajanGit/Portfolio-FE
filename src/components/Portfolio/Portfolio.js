import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './portfolio.scss';

class Portfolio extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={cx(s.page, s.portfolio)}>
        portfolio
      </div>
    );
  };
}


export default Portfolio;