import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './loader.scss';

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
        s.loader,
        s[`loader_theme_${theme}`],
        isVisible ? '' : s.loader_fadeout,
        this.state.isHidden ? s.hidden : ''
      )} />
    );
  };
}


export default Loader;