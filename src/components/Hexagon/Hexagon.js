import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import './Hexagon.scss';

class Hexagon extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    children: PropTypes.element
  }

  render() {
    const {className, width, height, backgroundImage, children} = this.props;

    return (
      <div className={cx("hexagon", className)} style={{width: width, height: height}}>
        <div className={"hexagon__inner"}>
          <div className={"hexagon__inner__content"} style={{backgroundImage: `url(${backgroundImage})`}}>
            {children}
          </div>
        </div>
      </div>
    );
  };
}


export default Hexagon;