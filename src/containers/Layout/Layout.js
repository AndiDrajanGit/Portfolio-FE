import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import { getDescription } from 'actions/description';
import { getSkills } from 'actions/skills';
import { getJobs } from 'actions/jobs';
import { getProjects, getProjectDetails } from 'actions/projects';
import { getContact } from 'actions/contact';

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
    this.props.getProjects();
    this.props.getContact();
  };

  componentDidMount = () => {
    configureAnchors({ scrollDuration: 750 });
  };

  render() {
    const { description, skills, jobs, projects, contact } = this.props;

    return (
      <div id="layout" className="layout">
        <Header />
        <div className="layout__containers">
          <Home contact={contact} />
          <ScrollableAnchor id="about">
            <About description={description} skills={skills} jobs={jobs} />
          </ScrollableAnchor>
          <ScrollableAnchor id="portfolio">
            <Portfolio projects={projects} getProjectDetails={this.props.getProjectDetails} />
          </ScrollableAnchor>
          <ScrollableAnchor id="contact">
            <Contact contact={contact} />
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
  jobs: state.jobs,
  projects: state.projects,
  contact: state.contact
});

const mapDispatchToProps = dispatch => ({
  getDescription: () => dispatch(getDescription()),
  getSkills: () => dispatch(getSkills()),
  getJobs: () => dispatch(getJobs()),
  getProjects: () => dispatch(getProjects()),
  getProjectDetails: id => dispatch(getProjectDetails(id)),
  getContact: () => dispatch(getContact())
});

Layout.propTypes = {
  getDescription: PropTypes.func.isRequired,
  description: PropTypes.object.isRequired,
  getSkills: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired,
  getProjectDetails: PropTypes.func.isRequired,
  getContact: PropTypes.func.isRequired,
  skills: PropTypes.object.isRequired,
  getJobs: PropTypes.func.isRequired,
  jobs: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
