import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageTitle from 'components/PageTitle';
import Background from 'components/Background';
import Loader from 'components/Loader';
import Description from 'components/Description';
import Skills from 'components/Skills';

import bg from 'images/bg_02.jpg';

import './About.scss';

class About extends PureComponent {
  render() {
    const { description } = this.props;
    const isDescriptionLoaded = !description.isPending && description.isLoaded;

    return (
      <div className="page about-page">
        <PageTitle theme="white" title="About" />
        <div className="about-page__content">
          <Background image={bg} overlayOpacity={0.7} />
          <div className="about-page__description">
            <Loader isVisible={!isDescriptionLoaded} />
            {isDescriptionLoaded && <Description data={description.data} />}
          </div>
          <div className="about-page__skills">
            <Skills />
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  description: PropTypes.object.isRequired
};

export default About;
