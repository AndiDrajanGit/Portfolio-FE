import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import { getDescription } from 'actions/description';
import { getSkills } from 'actions/skills';
import { getJobs } from 'actions/jobs';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'containers/Home';
import About from 'containers/About';
import Portfolio from 'containers/Portfolio';
import Contact from 'containers/Contact';

import './Layout.scss';

class Layout extends React.Component {
  componentWillMount = () => {
    this.props.getDescription();
    this.props.getSkills();
    this.props.getJobs();
  };

  componentDidMount = () => {
    configureAnchors({ scrollDuration: 750 });
  };

  render() {
    const { description, skills, jobs } = this.props;

    return (
      <div id="layout" className="layout">
        <Header />
        <div className="layout__containers">
          <Home />
          <ScrollableAnchor id="about">
            <About description={description} skills={skills} jobs={jobs} />
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

const mapStateToProps = state => ({
  description: state.description,
  skills: state.skills,
  jobs: state.jobs
});

const mapDispatchToProps = dispatch => ({
  getDescription: () => dispatch(getDescription()),
  getSkills: () => dispatch(getSkills()),
  getJobs: () => dispatch(getJobs())
});

Layout.propTypes = {
  getDescription: PropTypes.func.isRequired,
  description: PropTypes.object.isRequired,
  getSkills: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
  getJobs: PropTypes.func.isRequired,
  jobs: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
