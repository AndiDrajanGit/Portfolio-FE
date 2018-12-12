import React, { PureComponent } from 'react';

import { NAV } from 'constants/AppConsts';

import Loader from 'components/Loader';
import Background from 'components/Background';
import Hexagon from 'components/Hexagon';

import bg from 'images/bg_01.jpg';
import logo from 'images/logo.png';

import './Home.scss';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  imageLoaded = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="page home-page">
        <Loader isVisible={isLoading} backgroundColor="white" />
        <Background image={bg} overlayOpacity={0.75} onImageLoaded={this.imageLoaded} />
        <Hexagon className="home-page__logo">
          <img src={logo} alt="logo" />
        </Hexagon>
        <div className="home-page__content">
          <div className="home-page__title">
            <h1 className="font-bold">Andi Drajan</h1>
            <h2>
              <span>web designer</span>
              <span className="mobile-hide"> | </span>
              <span>web developer</span>
            </h2>
          </div>
          <div className="home-page__nav">
            {NAV.map(
              (item, index) =>
                item.showOnHome && (
                  <a key={index} className="home-page__nav__item font-medium" href={item.link}>
                    {item.title}
                  </a>
                )
            )}
          </div>
          <div className="home-page__resume">
            <a href="#contact" className="font-medium">
              Download Resume
            </a>
          </div>
        </div>
        {/* <div className="home-page__content">
          <div className="home-page__title-wrapper">
            <div className="home-page__title">
              <h1 className="font-bold">Andi Drajan</h1>
              <h2>
                <span>web designer</span>
                <span className="mobile-hide"> | </span>
                <span>web developer</span>
              </h2>
            </div>
          </div>
          <div className="home-page__nav-wrapper">
            <div className="home-page__nav">
              {NAV.map(
                (item, index) =>
                  item.showOnHome && (
                    <a key={index} className="home-page__nav__item font-medium" href={item.link}>
                      {item.title}
                    </a>
                  )
              )}
            </div>
          </div>
          <div className="home-page__resume-wrapper">
            <div className="home-page__resume">
              <a href="#contact" className="font-medium">
                Download Resume
              </a>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Home;
