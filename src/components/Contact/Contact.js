import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './contact.scss';

class Contact extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={cx(s.page, s.contact)}>
        contact
      </div>
    );
  };
}


export default Contact;