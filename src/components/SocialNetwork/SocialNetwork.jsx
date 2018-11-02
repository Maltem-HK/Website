import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import './socialnetwork.scss';

const SocialNetwork = ({
  socialNetworks,
}) => {
  const getSN = SNname => socialNetworks.find(({ name }) => name === SNname);

  return (
    <div className="social-network">
      { getSN('linkedin')
      && (
        <a href={getSN('linkedin').url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      )
      }
      { getSN('facebook')
      && (
        <a href={getSN('facebook').url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      )
      }
      { getSN('twitter')
      && (
        <a href={getSN('twitter').url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      )
      }
      { getSN('instagram')
      && (
        <a href={getSN('instagram').url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      )
      }
      { getSN('youtube')
      && (
        <a href={getSN('youtube').url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      )
      }
    </div>
  );
};

SocialNetwork.propTypes = {
  socialNetworks: PropTypes.arrayOf(Object).isRequired,
};

export default SocialNetwork;
