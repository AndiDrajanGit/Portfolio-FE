import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './header.scss';

let winHeight = window.innerHeight;

class Header extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const crtWinHeight = window.innerHeight;
    const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (crtWinHeight !== winHeight) {
      winHeight = crtWinHeight;
    }
    this.setState({visible: scrollTop >= winHeight})
  }

  render() {
    return (
      <div className={cx(s.header, this.state.visible ? s['header_visible'] : '')}>
        header
      </div>
    );
  };
}


export default Header;