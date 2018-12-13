import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';

import './ProjectDetails.scss';

class ProjectDetails extends PureComponent {
  render() {
    const { isLoaded, details, hideDetails } = this.props;
    console.log('DDDDDDD', isLoaded, details);
    return (
      <div className="project-details">
        <Loader isVisible={!isLoaded} />
        {isLoaded && (
          <div className="project-details__content">
            <div
              className="project-details__images"
              style={{ backgroundImage: `url(${details.cover_image})` }}
            />
          </div>
        )}
        <button onClick={hideDetails} className="font-bold project-details__close">
          X
        </button>
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  details: PropTypes.object.isRequired,
  hideDetails: PropTypes.func.isRequired
};

export default ProjectDetails;
