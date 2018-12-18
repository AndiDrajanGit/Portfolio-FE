import React from 'react';

import './Footer.scss';

class Footer extends React.Component {
  static propTypes = {};

  render() {
    return <div className="footer">&copy; {new Date().getFullYear()} Andi Drajan</div>;
  }
}

export default Footer;
