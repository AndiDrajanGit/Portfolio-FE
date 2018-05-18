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

import * as descriptionActions from '../../actions/description';

const mapStateToProps = state => ({
  description: state.description
});

const mapDispatchToProps = dispatch => ({
  descriptionActions: bindActionCreators(descriptionActions, dispatch)
});

class Layout extends React.Component {
  static propTypes = {
    descriptionActions: PropTypes.object,
    description: PropTypes.object
  }

  componentWillMount = () => {
    this.props.descriptionActions.getDescription();
  };

  componentDidMount = () => {
    configureAnchors({scrollDuration: 750});
  };

  render() {
    const {description} = this.props;

    return (
      <div id="layout" className={s.layout}>
        <Header />
        <div className={s.layout__containers}>
          <ScrollableAnchor id="home">
            <Home />
          </ScrollableAnchor>
          <ScrollableAnchor id="about">
            <About
              description={description}
            />
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