import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import renderHtml from 'react-render-html';
import Carousel from 'nuka-carousel';

import Loader from 'components/Loader';

import './ProjectDetails.scss';

class ProjectDetails extends PureComponent {
  handleClickOutside() {
    this.props.hideDetails();
  }

  render() {
    const { isLoaded, details, hideDetails } = this.props;
    console.log('DDDDDDD', isLoaded, details);

    return (
      <div className="project-details">
        <Loader isVisible={!isLoaded} />
        {isLoaded && (
          <div className="project-details__content">
            <Carousel
              className="project-details__carousel"
              style={{ backgroundImage: `url(${details.cover_image})` }}
              renderBottomLeftControls={({ previousSlide }) => (
                <button className="icon-angle-left" onClick={previousSlide} />
              )}
              renderBottomRightControls={({ nextSlide }) => (
                <button className="icon-angle-right" onClick={nextSlide} />
              )}
              wrapAround
              speed={750}
              easing="easeCubicInOut"
            >
              {details.images.map((image, index) => (
                <div key={index} className="project-details__carousel__item">
                  {image.desktop && (
                    <img
                      className={cx(
                        'project-details__carousel__item__image',
                        'project-details__carousel__item__image--desktop'
                      )}
                      src={image.desktop.url}
                      alt={`${details.title} - ${index} - Desktop`}
                    />
                  )}
                  {image.mobile && (
                    <img
                      className={cx(
                        'project-details__carousel__item__image',
                        'project-details__carousel__item__image--mobile'
                      )}
                      src={image.mobile.url}
                      alt={`${details.title} - ${index} - Mobile`}
                    />
                  )}
                </div>
              ))}
            </Carousel>
            <div className="project-details__info">
              <div className="project-details__info__title">
                <h2 className="font-bold">{details.title}</h2>
                <h3 className="font-medium">{details.subtitle}</h3>
              </div>
              <div className="project-details__info__description">
                {details.description.map((description, index) => (
                  <p key={index}>{renderHtml(description.text)}</p>
                ))}
              </div>
            </div>
            {details.website && (
              <a className="project-details__site font-bold" href={details.website} target="_blank">
                View Site
              </a>
            )}
          </div>
        )}
        <button onClick={hideDetails} className="font-bold project-details__close">
          X
        </button>
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  details: PropTypes.object.isRequired,
  hideDetails: PropTypes.func.isRequired
};

export default enhanceWithClickOutside(ProjectDetails);
