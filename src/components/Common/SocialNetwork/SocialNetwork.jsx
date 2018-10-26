import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { socialNetworksFetchData } from '../../../actions/socialNetworks';
import './socialnetwork.scss';

export class SocialNetwork extends Component {
  componentDidMount() {
    const { socialNetworksFetch } = this.props;
    socialNetworksFetch();
  }

  render() {
    const { socialNetworks, hasErrored, isLoading } = this.props;
    if (hasErrored || isLoading || (Object.keys(socialNetworks).length === 0)) return '';

    return (
      <div className="social-network">
        { socialNetworks.linkedin
          && (
            <a href={socialNetworks.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          )
        }
        { socialNetworks.facebook
          && (
            <a href={socialNetworks.facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          )
        }
        { socialNetworks.twitter
          && (
            <a href={socialNetworks.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          )
        }
        { socialNetworks.instagram
          && (
            <a href={socialNetworks.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          )
        }
        { socialNetworks.youtube
          && (
            <a href={socialNetworks.youtube} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          )
        }
      </div>
    );
  }
}

SocialNetwork.propTypes = {
  socialNetworksFetch: PropTypes.func.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  socialNetworks: PropTypes.objectOf(String).isRequired,
};

export const mapStateToProps = ({ socialNetworks }) => ({
  socialNetworks: socialNetworks.socialNetworks,
  hasErrored: socialNetworks.hasErrored,
  isLoading: socialNetworks.isLoading,
});

export const mapDispatchToProps = dispatch => ({
  socialNetworksFetch: () => dispatch(socialNetworksFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialNetwork);
