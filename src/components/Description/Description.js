import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import renderHtml from 'react-render-html';

import Hexagon from 'components/Hexagon';

import './Description.scss';

class Description extends PureComponent {
  render() {
    const { picture, description } = this.props.data;
    return (
      <div className="description">
        <Hexagon className="description__picture" backgroundImage={picture.url} />
        <div className="description__title">
          <h2>Andi Drajan</h2>
          <div>
            <div className="description__title__web">
              <Hexagon className="description__title__web__hex">
                <span className="icon-edit" />
              </Hexagon>
              <h3>
                Web
                <br />
                Designer
              </h3>
            </div>
            <div className="description__title__web">
              <Hexagon className="description__title__web__hex">
                <span className="icon-code" />
              </Hexagon>
              <h3>
                Web
                <br />
                Developer
              </h3>
            </div>
          </div>
        </div>
        <div className="description__text">
          {renderHtml(description)}
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  data: PropTypes.object.isRequired
};

export default Description;
