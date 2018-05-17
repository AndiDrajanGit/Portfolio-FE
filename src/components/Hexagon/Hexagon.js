import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import s from './hexagon.scss';

// import hexagon from '../../images/hexagon.svg';

class Hexagon extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node
  }

  render() {
    const {className, width, height, children} = this.props;
    const borderWidth = `${height / 2}px`;
    const angleWidth = `${width / 4}px`;
    console.log(borderWidth);
    return (
      <div
        className={cx(s.hexagon, className)}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          lineHeight: `${height}px`
        }}
      >
        {children}
      </div>
    );
  };
}


export default Hexagon;