import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './buttonHome.scss';

class ButtonHome extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    const {link, icon, text} = this.props;
    return (
      <a className={s['button-home']} href={link}>
        <div className={s['button-home__icon']}>
          <span className={s[`icon_${icon}`]} />
        </div>
        <div className={cx(s['button-home__text'], s.font_medium)}>
          {text}
        </div>
      </a>
    );
  };
}


export default ButtonHome;