import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import PageTitle from 'components/PageTitle';
import Background from 'components/Background';
import Loader from 'components/Loader';
import Description from 'components/Description';
import Skills from 'components/Skills';
import Jobs from 'components/Jobs';

import bg from 'images/bg_02.jpg';

import './About.scss';

class About extends PureComponent {
  render() {
    const { description, skills, jobs } = this.props;
    const isDescriptionLoaded = !description.isPending && description.isLoaded;
    const isDetailsLoaded =
      !skills.isPending && skills.isLoaded && (!jobs.isPending && jobs.isLoaded);

    return (
      <div className="page about-page">
        <PageTitle theme="white" title="About" />
        <div className="about-page__content">
          <Background image={bg} overlayOpacity={0.7} />
          <div className="about-page__description">
            <Loader isVisible={!isDescriptionLoaded} />
            {isDescriptionLoaded && <Description data={description.data} />}
          </div>
          <div className="about-page__details">
            <Loader isVisible={!isDetailsLoaded} />
            {isDetailsLoaded && (
              <Fragment>
                <Skills skills={skills.data} />
                <Jobs jobs={jobs.data} />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  description: PropTypes.object.isRequired,
  skills: PropTypes.object.isRequired,
  jobs: PropTypes.object.isRequired
};

export default About;
