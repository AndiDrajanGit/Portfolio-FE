import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './home.scss';

import Background from '../../components/Background';
import HomeNavItem from '../../components/HomeNavItem';

import bg from '../../images/bg_01.jpg';
import logo from '../../images/logo.png';


class Home extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={cx(s.page, s.home)}>
        <Background image={bg} overlayOpacity={0.75} />
        <div className={s.home__logo}>
          <img src={logo} alt="logo" />
        </div>
        <table className={s.home__content}>
          <tbody>
            <tr>
              <td className={s.home__title}>
                <h1 className={s.font_bold}>Andi Drajan</h1>
                <h2>
                  <span>web designer</span>
                  <span className={s['mobile-hide']}> | </span>
                  <span>web developer</span>
                </h2>
              </td>
            </tr>
            <tr>
              <td className={s.home__nav}>
                <HomeNavItem link="#about" icon="info" text="About" />
                <HomeNavItem link="#portfolio" icon="tiles" text="Portfolio" />
                <HomeNavItem link="#contact" icon="envelope" text="Contact" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}


export default Home;