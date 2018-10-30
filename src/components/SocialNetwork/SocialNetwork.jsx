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
  socialNetworks: {
    facebook,
    twitter,
    linkedin,
    youtube,
    instagram,
  },
}) => (
  <div className="social-network">
    { linkedin
    && (
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    )
    }
    { facebook
    && (
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
    )
    }
    { twitter
    && (
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    )
    }
    { instagram
    && (
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    )
    }
    { youtube
    && (
      <a href={youtube} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    )
    }
  </div>
);

SocialNetwork.propTypes = {
  socialNetworks: PropTypes.objectOf(String).isRequired,
};

export default SocialNetwork;
