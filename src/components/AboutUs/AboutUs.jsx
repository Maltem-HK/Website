import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import './about-us.scss';

const AboutUs = (props) => {
  const {
    about,
    about: {
      aboutcontents,
    },
  } = props;

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-title main-title"><span>About us</span></div>
        <div className="contact-content-description">{about.description}</div>
        <div className="contact-content-items">
          {
            aboutcontents.map(({ id, content, picture }) => (
              <div className="contact-content-item" key={id}>
                <img alt={`Maltem about content ${id}`} src={`${config.backendURL}${picture.url}`} />
                <div>{content}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  about: PropTypes.objectOf(Object).isRequired,
};

export default AboutUs;
