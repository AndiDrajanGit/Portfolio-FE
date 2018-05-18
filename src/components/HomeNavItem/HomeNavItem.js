import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './homeNavItem.scss';

class HomeNavItem extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    const {link, icon, text} = this.props;
    return (
      <a className={s['home-nav-item']} href={link}>
        <div className={s['home-nav-item__icon']}>
          <span className={s[`icon_${icon}`]} />
        </div>
        <div className={cx(s['home-nav-item__text'], s.font_medium)}>
          {text}
        </div>
      </a>
    );
  };
}


export default HomeNavItem;