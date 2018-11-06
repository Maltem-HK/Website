import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGlobeAsia, faKey } from '@fortawesome/free-solid-svg-icons';
import { agglomerateFetchData } from '../../actions/agglomerate';
import SocialNetworks from '../SocialNetwork/SocialNetwork';
import './footer.scss';

export class Footer extends Component {
  componentDidMount() {
    const { agglomerateFetch } = this.props;
    agglomerateFetch();
  }

  render() {
    const {
      agglomerate: {
        socialnetworks,
      },
    } = this.props;

    return (
      <div className="footer">
        <div className="footer-sitemap">
          <h4>Sitemap</h4>
          <a href="#general-information">
            <FontAwesomeIcon icon={faGlobeAsia} />
            Maltem Consulting Group
          </a>
          <a href="#our-team">
            <FontAwesomeIcon icon={faUsers} />
            Our team
          </a>
          <a href="#key-facts">
            <FontAwesomeIcon icon={faKey} />
            Key facts
          </a>
        </div>
        <div>
          <h4>Follow us</h4>
          <SocialNetworks
            socialNetworks={socialnetworks}
          />
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  agglomerateFetch: PropTypes.func.isRequired,
  agglomerate: PropTypes.objectOf(Object).isRequired,
};

export const mapStateToProps = ({ agglomerate }) => ({
  agglomerate,
});

export const mapDispatchToProps = dispatch => ({
  agglomerateFetch: () => dispatch(agglomerateFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
