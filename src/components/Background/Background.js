import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import './Background.scss';

class Background extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    overlayOpacity: PropTypes.number.isRequired
  }

  render() {
    const {image, overlayOpacity} = this.props;
    return (
      <div className="background" style={{backgroundImage: `url(${image})`}}>
        <div className="background__overlay" style={{opacity: overlayOpacity}} />
      </div>
    );
  };
}


export default Background;