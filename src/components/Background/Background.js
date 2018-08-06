import PropTypes from 'prop-types';
import React from 'react';

import './Background.scss';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  onImageLoaded = () => {
    this.setState({ isLoading: false });
    this.props.onImageLoaded();
  };

  render() {
    const { image, overlayOpacity } = this.props;
    return (
      <div className="background" style={{ backgroundImage: `url(${image})` }}>
        {this.state.isLoading && (
          <img className="hidden" src={image} onLoad={this.onImageLoaded} alt="" />
        )}
        <div className="background__overlay" style={{ opacity: overlayOpacity }} />
      </div>
    );
  }
}

Background.propTypes = {
  image: PropTypes.string.isRequired,
  overlayOpacity: PropTypes.number.isRequired,
  onImageLoaded: PropTypes.func
};

Background.defaultProps = {
  onImageLoaded: () => true
};

export default Background;
