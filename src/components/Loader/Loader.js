import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import './Loader.scss';

class Loader extends React.Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    theme: PropTypes.string
  };

  static defaultProps = {
    theme: 'green'
  };

  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
  }

  componentWillReceiveProps = (newProps) => {
    setTimeout(() => {
      this.setState({isHidden: !newProps.isVisible});
    }, 2000);
  };

  render() {
    const {isVisible, theme} = this.props;
    return (
      <div className={cx(
        "loader",
        `loader_theme_${theme}`,
        isVisible ? '' : "loader--fadeout",
        this.state.isHidden ? "hidden" : ''
      )} />
    );
  };
}


export default Loader;