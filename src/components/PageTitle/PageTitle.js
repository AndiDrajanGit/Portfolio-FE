import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './PageTitle.scss';

class PageTitle extends PureComponent {
  render() {
    const { theme, title } = this.props;
    return (
      <div className={cx('page-title', `page-title--theme-${theme}`)}>
        <span className="font-bold">{title}</span>
      </div>
    );
  }
}

PageTitle.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PageTitle;
