import React from 'react';
import cx from 'classnames';

import { scrollToTop } from 'utils/site';

import logo from 'images/logo.png';

import HeaderMenu from 'components/HeaderMenu';
import HeaderNav from 'components/HeaderNav';

import './Header.scss';

let winHeight = window.innerHeight;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeNavItem: ''
    };
  }

  componentDidMount = () => {
    this.setActiveNavItem();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('hashchange', this.setActiveNavItem);
  };

  setActiveNavItem = () => {
    this.setState({ activeNavItem: window.location.hash.substr(1) });
  };

  handleClick = (e, link) => {
    if (link === '') {
      e.preventDefault();
      scrollToTop(500);
    }
  };

  handleScroll = () => {
    const crtWinHeight = window.innerHeight;
    const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (crtWinHeight !== winHeight) {
      winHeight = crtWinHeight;
    }
    this.setState({ visible: scrollTop >= winHeight - 100 });
  };

  render() {
    const { activeNavItem } = this.state;
    return (
      <div className={cx('header', this.state.visible ? 'header--visible' : '')}>
        <div className="header__content">
          <a href="#home" onClick={e => this.handleClick(e, '')} className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="header__nav mobile-hide">
            <HeaderNav
              classname="header__nav"
              activeNavItem={activeNavItem}
              handleNavClick={this.handleClick}
            />
          </div>
          <HeaderMenu handleNavClick={this.handleClick} activeNavItem={activeNavItem} />
        </div>
      </div>
    );
  }
}

export default Header;
