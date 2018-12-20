import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { NAV } from 'constants/AppConsts';

class HeaderNav extends PureComponent {
  render() {
    const { classname, activeNavItem } = this.props;
    return (
      <Fragment>
        {NAV.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={e => this.props.handleNavClick(e, item.link)}
            className={cx(
              `${classname}__item`,
              activeNavItem === item.title ? `${classname}__item--active` : ''
            )}
          >
            {item.title}
          </a>
        ))}
      </Fragment>
    );
  }
}

HeaderNav.propTypes = {
  classname: PropTypes.string.isRequired,
  activeNavItem: PropTypes.string.isRequired,
  handleNavClick: PropTypes.func.isRequired
};

export default HeaderNav;
