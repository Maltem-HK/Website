import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';
import profilePicturePlaceholder from '../../assets/img/profile-picture-placeholder.jpg';
import './team.scss';

const Team = ({
  team,
}) => (
  <div>
    <div className="ourteam-title"><span>Our team</span></div>
    <div className="team">
      {
        team.members.map((member) => {
          let photo = profilePicturePlaceholder;
          if (member.photo && member.photo.url) photo = `${config.backendURL}${member.photo.url}`;

          return (
            <div key={member.id} className="team-member">
              <div className="team-member-img">
                <img
                  alt={`Maltem - ${member.firstName} ${member.lastName} profile`}
                  src={photo}
                />
              </div>
              <div className="team-member-name">
                {member.firstName}
                &nbsp;
                {member.lastName}
              </div>
              <div className="team-member-position">{member.position}</div>
              <div className="team-member-description">{member.description}</div>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href={`mailto:${member.email}`} rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          );
        })
      }
    </div>
  </div>
);

Team.propTypes = {
  team: PropTypes.objectOf(Object).isRequired,
};

export default Team;
