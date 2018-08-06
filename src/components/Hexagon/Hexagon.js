import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import './Hexagon.scss';

const Hexagon = ({ className, backgroundImage, children }) => (
  <div className={cx('hexagon', className)}>
    <div className="hexagon__inner">
      <div
        className="hexagon__inner__content"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
    </div>
  </div>
);

Hexagon.propTypes = {
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.element
};

Hexagon.defaultProps = {
  className: '',
  backgroundImage: '',
  children: ''
};

export default Hexagon;
