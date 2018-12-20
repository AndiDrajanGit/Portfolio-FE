import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import disableScroll from 'disable-scroll';

import HeaderNav from 'components/HeaderNav';

import './HeaderMenu.scss';

class HeaderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
    disableScroll.off();
  };

  handleMenuClick = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      disableScroll.off();
    } else {
      disableScroll.on();
    }
    this.setState({ isOpen: !isOpen });
  };

  handleNavClick = (e, link) => {
    this.setState({ isOpen: false });
    disableScroll.off();
    this.props.handleNavClick(e, link);
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="header-menu desktop-hide">
        <button
          className={cx('header-menu__button', isOpen ? 'header-menu__button--close' : '')}
          onClick={this.handleMenuClick}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={cx('header-menu__nav', isOpen ? 'header-menu__nav--open' : '')}>
          <HeaderNav
            classname="header-menu__nav"
            activeNavItem={this.props.activeNavItem}
            handleNavClick={this.handleNavClick}
          />
        </div>
      </div>
    );
  }
}

HeaderMenu.propTypes = {
  handleNavClick: PropTypes.func.isRequired,
  activeNavItem: PropTypes.string.isRequired
};

export default enhanceWithClickOutside(HeaderMenu);
