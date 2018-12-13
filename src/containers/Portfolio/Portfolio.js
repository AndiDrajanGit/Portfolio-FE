import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import renderHtml from 'react-render-html';
import cx from 'classnames';

import PageTitle from 'components/PageTitle';
import Loader from 'components/Loader';
import ProjectDetails from 'components/ProjectDetails';

import './Portfolio.scss';

class Portfolio extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      hideDetails: true
    };
  }

  // REMOVE WHEN DONE
  componentWillMount = () => {
    setTimeout(() => {
      this.setState({ showDetails: true, hideDetails: false });
    }, 1000);
    setTimeout(() => {
      this.props.getProjectDetails(79);
    }, 2000);
  };

  showDetails = id => {
    this.props.getProjectDetails(id);
    document.body.style.top = `${-document.documentElement.scrollTop}px`;
    document.body.style.overflowY = 'scroll';
    document.body.style.position = 'fixed';
    this.setState({ showDetails: true, hideDetails: false });
  };

  hideDetails = () => {
    document.body.style.position = 'static';
    document.body.style.overflowY = 'auto';
    document.body.style.top = '0';
    this.setState({ showDetails: false });
    setTimeout(() => {
      this.setState({ hideDetails: true });
    }, 500);
  };

  render() {
    const { projects } = this.props;
    const { showDetails, hideDetails } = this.state;
    const isProjectsLoaded = projects.isLoaded;
    return (
      <div className="page portfolio-page">
        <PageTitle theme="grey" title="Portfolio" />
        <Loader isVisible={!isProjectsLoaded} />
        {isProjectsLoaded && (
          <div className="portfolio-page__content">
            {projects.data.map(project => (
              <div
                key={project.id}
                className="portfolio-page__project"
                style={{ backgroundImage: `url(${project.cover_image})` }}
              >
                <div className="portfolio-page__project__hover">
                  <h3 className="font-medium">{project.title}</h3>
                  <p>{renderHtml(project.description)}</p>
                  <div className="portfolio-page__project__hover__buttons">
                    <button onClick={() => this.showDetails(project.id)}>
                      <i className="icon-search" />
                      <span className="font-medium">Details</span>
                    </button>
                    {project.website && (
                      <a href={project.website} target="_blank">
                        <i className="icon-link" />
                        <span className="font-medium">Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={cx(
            'portfolio-page__details',
            showDetails ? 'portfolio-page__details--visible' : '',
            hideDetails ? 'portfolio-page__details--hidden' : ''
          )}
        >
          {this.state.showDetails && (
            <ProjectDetails
              details={projects.project}
              isLoaded={projects.isLoadedDetails}
              hideDetails={this.hideDetails}
            />
          )}
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  projects: PropTypes.object.isRequired,
  getProjectDetails: PropTypes.func.isRequired
};

export default Portfolio;
