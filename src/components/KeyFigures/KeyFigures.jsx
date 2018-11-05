import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import maltemLogo from '../../assets/img/maltem-logo-black.png';
import './key-figures.scss';

const KeyFigures = ({
  keyFigures,
}) => (
  <div className="key-figures">
    <div className="key-figures-title main-title"><span>Key facts</span></div>
    <div className="figures">
      {
        keyFigures.map(kf => (
          <div className="figures-item" key={kf.id}>
            <div className="figures-item-title">{kf.title}</div>
            <div className="figures-item-figure">
              <AnimatedNumber
                value={kf.figure}
                duration={2000}
                stepPrecision={0}
              />

            </div>
            <div className="figures-item-description">{kf.description}</div>
            <img className="figures-item-img" alt="maltem logo black" src={maltemLogo} />
          </div>
        ))
      }
    </div>
  </div>
);

KeyFigures.propTypes = {
  keyFigures: PropTypes.arrayOf(Object).isRequired,
};

export default KeyFigures;
