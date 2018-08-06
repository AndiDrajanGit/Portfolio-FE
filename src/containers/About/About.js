import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Background from 'components/Background';
import Loader from 'components/Loader';

import bg from 'images/bg_02.jpg';

import './About.scss';

class About extends PureComponent {
  render() {
    const { description } = this.props;
    const isDescriptionLoaded = !description.isPending && description.isLoaded;

    return (
      <div className="page about-page">
        <Background image={bg} overlayOpacity={0.7} />
        <div className="about-page__description">
          <Loader isVisible={!isDescriptionLoaded} />
          {isDescriptionLoaded && <div className="about-page__content">content here</div>}
        </div>
      </div>
    );
  }
}

About.propTypes = {
  description: PropTypes.object.isRequired
};

export default About;
