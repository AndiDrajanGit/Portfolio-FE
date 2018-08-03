import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import './Home.scss';

import Background from 'components/Background';
import Hexagon from 'components/Hexagon';
import HomeNavItem from 'components/HomeNavItem';

import bg from 'images/bg_01.jpg';
import logo from 'images/logo.png';

import {NAV} from 'constants/AppConsts';

class Home extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="page page-home">
        <Background image={bg} overlayOpacity={0.75} />
        <Hexagon className="page-home__logo" width="300px" height="250px">
          <img src={logo} alt="logo" />
        </Hexagon>
        <table className="page-home__content">
          <tbody>
            <tr>
              <td className="page-home__title">
                <h1 className="font_bold">Andi Drajan</h1>
                <h2>
                  <span>web designer</span>
                  <span className="mobile-hide"> | </span>
                  <span>web developer</span>
                </h2>
              </td>
            </tr>
            <tr>
              <td className="page-home__nav">
                {NAV.map((item, key) => (
                  item.showOnHome &&
                    <HomeNavItem key={key} link={`#${item.title}`} icon={item.icon} text={item.title} />
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}


export default Home;