import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './background.scss';

class Background extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    overlayOpacity: PropTypes.number.isRequired
  }

  render() {
    const {image, overlayOpacity} = this.props;
    return (
      <div className={s.background} style={{backgroundImage: `url(${image})`}}>
        <div className={s.background__overlay} style={{opacity: overlayOpacity}} />
      </div>
    );
  };
}


export default Background;