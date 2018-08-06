import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Loader.scss';

class Loader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
  }

  componentWillReceiveProps = newProps => {
    setTimeout(() => {
      this.setState({ isHidden: !newProps.isVisible });
    }, 1000);
  };

  render() {
    const { isVisible, backgroundColor, theme } = this.props;
    return (
      <div
        className={cx(
          'loader',
          `loader_theme_${theme}`,
          isVisible ? '' : 'loader_fadeout',
          this.state.isHidden ? 'hidden' : ''
        )}
        style={{ backgroundColor: `${backgroundColor}` }}
      />
    );
  }
}

Loader.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  theme: PropTypes.string
};

Loader.defaultProps = {
  backgroundColor: 'transparent',
  theme: 'green'
};

export default Loader;
