import React from 'react';
import Typing from 'react-typing-animation';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import SocialNetworkComponent from '../SocialNetwork/SocialNetwork';
import isEmpty from '../../utils/object';
import './welcome.scss';


const Welcome = ({
  welcomeWords,
  socialNetworks,
}) => (
  <div className="welcome">
    {welcomeWords.length === 0
      && <h1>We are Maltem</h1>
    }
    {welcomeWords.length !== 0
      && (
        <h1>
          <div>We are </div>
          <Typing speed={100} loop>
            {
              welcomeWords.map(item => (
                <div key={item.id}>
                  {item.word}
                  <Typing.Delay ms={5000} />
                  <Typing.Backspace count={item.word.length} />
                </div>
              ))
            }
          </Typing>
        </h1>
      )
    }
    {!isEmpty(socialNetworks)
      && <SocialNetworkComponent socialNetworks={socialNetworks} />
    }
    <span className="welcome-arrow">
      <a href="#general-information">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </a>
    </span>
  </div>
);

Welcome.propTypes = {
  welcomeWords: PropTypes.arrayOf(Object).isRequired,
  socialNetworks: PropTypes.arrayOf(Object).isRequired,
};

export default Welcome;
