import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Hexagon from 'components/Hexagon';

import './ContactItem.scss';

class ContactItem extends PureComponent {
  render() {
    const { position, icon, text, url } = this.props;
    return (
      <a
        href={url}
        target="_blank"
        className={cx('contact-item', `contact-item--position-${position}`)}
      >
        <Hexagon className="contact-item__hex">
          <span className={`icon-${icon}`} />
        </Hexagon>
        <span className="contact-item__info">{text}</span>
      </a>
    );
  }
}

ContactItem.propTypes = {
  position: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string.isRequired
};

ContactItem.defaultProps = {
  text: ''
};

export default ContactItem;
