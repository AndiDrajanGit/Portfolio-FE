import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import './Header.scss';

import logo from 'images/logo.png';

import { NAV } from 'constants/AppConsts';
import { scrollToTop } from 'utils/site';

let winHeight = window.innerHeight;

class Header extends React.Component {
  static propTypes = {
  };

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

  handleScroll = () => {
    const crtWinHeight = window.innerHeight;
    const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (crtWinHeight !== winHeight) {
      winHeight = crtWinHeight;
    }
    this.setState({visible: scrollTop >= winHeight})
  };

  handleClick = (e, link) => {
    if (link === '') {
      e.preventDefault();
      scrollToTop(500);
    }
  };

  setActiveNavItem = () => {
    this.setState({activeNavItem: window.location.hash.substr(1)});
  };

  render() {
    const hash = window.location.hash;

    return (
      <div className={cx("header", this.state.visible ? "header--visible" : '')}>
        <div className="header__content">
          <a href="#home" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="header__nav">
            {NAV.map((item, key) => (
              <a
                key={key}
                href={item.link}
                onClick={(e) => this.handleClick(e, item.link)}
                className={cx(
                  "header__nav__item",
                  this.state.activeNavItem === item.title ? "header__nav__item--active" : ''
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
}


export default Header;