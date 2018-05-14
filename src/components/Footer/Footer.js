import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './footer.scss';

class Footer extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={s.footer}>
        footer
      </div>
    );
  };
}


export default Footer;