import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import './HomeNavItem.scss';

class HomeNavItem extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    const {link, icon, text} = this.props;
    return (
      <a className="home-nav-item" href={link}>
        <div className="home-nav-item__icon">
          <span className={`icon_${icon}`} />
        </div>
        <div className={cx("home-nav-item__text", "font-medium")}>
          {text}
        </div>
      </a>
    );
  };
}


export default HomeNavItem;