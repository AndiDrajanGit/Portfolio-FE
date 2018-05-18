import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './header.scss';

import logo from '../../images/logo.png';

import {NAV} from '../../constants/AppConsts';

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

  setActiveNavItem = () => {
    this.setState({activeNavItem: window.location.hash.substr(1)});
  };

  render() {
    const hash = window.location.hash;

    return (
      <div className={cx(s.header, this.state.visible ? s['header_visible'] : '')}>
        <div className={s.header__content}>
          <a href="#home" className={s.header__logo}>
            <img src={logo} alt="logo" />
          </a>
          <div className={s.header__nav}>
            {NAV.map((item, key) => (
              <a
                key={key}
                href={`#${item.title}`}
                className={cx(
                  s.header__nav__item,
                  this.state.activeNavItem === item.title ? s.header__nav__item_active : ''
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