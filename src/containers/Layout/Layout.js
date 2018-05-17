import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import s from './layout.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

import * as testActions from '../../actions/test';

const mapStateToProps = state => ({
  test: state.test.data
});

const mapDispatchToProps = dispatch => ({
  testActions: bindActionCreators(testActions, dispatch)
});

class Layout extends React.Component {
  static propTypes = {
    testActions: PropTypes.object,
    test: PropTypes.array
  }

  componentWillMount = () => {
    this.props.testActions.getTest();
  };

  componentDidMount = () => {
    configureAnchors({scrollDuration: 500});
  };

  render() {
    return (
      <div id="layout" className={s.layout}>
        <Header />
        <div className={s.layout__containers}>
          <ScrollableAnchor id="home">
            <Home />
          </ScrollableAnchor>
          <ScrollableAnchor id="about">
            <About />
          </ScrollableAnchor>
          <ScrollableAnchor id="portfolio">
            <Portfolio />
          </ScrollableAnchor>
          <ScrollableAnchor id="contact">
            <Contact />
          </ScrollableAnchor>
        </div>
        <Footer />
      </div>
    );
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);