import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Portfolio.scss';

import PageTitle from 'components/PageTitle';
import Loader from 'components/Loader';

class Portfolio extends PureComponent {
  render() {
    const { projects } = this.props;
    const isProjectsLoaded = !projects.isPending && projects.isLoaded;
    console.log('PPPPPPPPP', projects);
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
                  project details here
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Portfolio.propTypes = {
  projects: PropTypes.object.isRequired
};

export default Portfolio;
