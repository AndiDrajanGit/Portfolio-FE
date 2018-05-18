import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './about.scss';

import Background from '../../components/Background';
import Loader from '../../components/Loader';

import bg from '../../images/bg_02.jpg';

class About extends React.Component {
  static propTypes = {
    description: PropTypes.object.isRequired
  }

  render() {
    const {description} = this.props;
    const isDescriptionLoaded = !description.isPending && description.isLoaded;

    console.log('LLLLLLL', isDescriptionLoaded);

    return (
      <div className={cx(s.page, s.about)}>
        <Background image={bg} overlayOpacity={0.7} />
        <div className={s.about__description}>
          <Loader isVisible={!isDescriptionLoaded} />
          {isDescriptionLoaded &&
            <div className={s.about__content}>
              content here
            </div>
          }
        </div>
      </div>
    );
  };
}


export default About;