import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Jobs.scss';

class Jobs extends PureComponent {
  getJobLength = job => {
    const { start, present, end } = job.acf.years;
    if (present) {
      const crtYear = new Date().getFullYear();
      return crtYear - start + 1;
    }
    return end - start;
  };

  render() {
    const { jobs } = this.props;
    const crtYear = new Date().getFullYear();
    const timelineSegments = crtYear - 2011 + 1;
    return (
      <div className="jobs">
        <h2 className="font-bold">Work Experience</h2>
        <div className="jobs__wrapper">
          <div className="jobs__list">
            {jobs.map(job => (
              <div
                key={job.id}
                className="jobs__list__item"
                style={{ width: `calc(100% / ${timelineSegments} * ${this.getJobLength(job)})` }}
              >
                <span className="jobs__list__item__years desktop-hide">
                  {job.acf.years.start} - {job.acf.years.present ? 'Present' : job.acf.years.end}
                </span>
                <h3 className="font-medium">{job.title.rendered}</h3>
                {job.acf.positions.map((pos, index) => (
                  <span key={index} className="jobs__list__item__position">
                    {pos.position}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="jobs__timeline mobile-hide">
            {new Array(timelineSegments).fill().map((year, index) => (
              <div key={index} className="jobs__timeline__segment">
                {2011 + index}
              </div>
            ))}
          </div>
          {/* <div className="jobs__timeline mobile-hide">
            {new Array(timelineSegments).fill().map((year, index) => (
              <div
                key={index}
                className="jobs__timeline__segment"
                style={{ width: `calc(100% / ${timelineSegments}` }}
              >
                {2011 + index}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    );
  }
}

Jobs.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default Jobs;
