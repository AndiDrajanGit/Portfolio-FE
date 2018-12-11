import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import lodashChunk from 'lodash.chunk';

import './Skills.scss';

class Skills extends PureComponent {
  render() {
    const { skills } = this.props;
    const skillsChunk = skills.length % 2 === 0 ? skills.length / 2 : skills.length / 2 + 1;
    return (
      <div className="skills">
        <h2 className="font-bold">Skills</h2>
        <div className="skills__list">
          {lodashChunk(skills, skillsChunk).map((group, index) => (
            <ul key={index}>
              {group.map(skill => (
                <li key={skill.id} className="skills__list__item">
                  <h3 className="font-bold">{skill.title.rendered}</h3>
                  <span>{skill.acf.percentage}%</span>
                  <div
                    className="skills__list__item__percentage"
                    style={{ width: `${skill.acf.percentage}%` }}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default Skills;
