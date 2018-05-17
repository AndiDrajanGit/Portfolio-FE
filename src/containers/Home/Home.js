import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './home.scss';

import Background from '../../components/Background';
import Hexagon from '../../components/Hexagon';
import ButtonHome from '../../components/ButtonHome';

import bg from '../../images/bg_01.jpg';
import logo from '../../images/logo.png';


class Home extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={cx(s.page, s.home)}>
        <Background image={bg} overlayOpacity={0.75} />
        <Hexagon className={s.home__logo} width={300} height={250}>
          <img src={logo} alt="logo" />
        </Hexagon>
        <div className={s.home__title}>
          <h1 className={s.font_bold}>Andi Drajan</h1>
          <h2>web designer | web developer</h2>
        </div>
        <div className={s.home__nav}>
          <ButtonHome link="#about" icon="info" text="About" />
          <ButtonHome link="#portfolio" icon="tiles" text="Portfolio" />
          <ButtonHome link="#contact" icon="envelope" text="Contact" />
        </div>
      </div>
    );
  };
}


export default Home;