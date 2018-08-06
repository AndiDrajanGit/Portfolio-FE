import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import * as descriptionActions from 'actions/description';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'containers/Home';
import About from 'containers/About';
import Portfolio from 'containers/Portfolio';
import Contact from 'containers/Contact';

import './Layout.scss';

const mapStateToProps = state => ({
  description: state.description
});

const mapDispatchToProps = dispatch => ({
  descriptionActions: bindActionCreators(descriptionActions, dispatch)
});

class Layout extends React.Component {
  componentWillMount = () => {
    this.props.descriptionActions.getDescription();
  };

  componentDidMount = () => {
    configureAnchors({ scrollDuration: 750 });
  };

  render() {
    const { description } = this.props;

    return (
      <div id="layout" className="layout">
        <Header />
        <div className="layout__containers">
          <Home />
          <ScrollableAnchor id="about">
            <About description={description} />
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
  }
}

Layout.propTypes = {
  descriptionActions: PropTypes.object,
  description: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
