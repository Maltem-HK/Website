import React from 'react';
import PropTypes from 'prop-types';
import './generalinfoeco.scss';

const GeneralInfoEco = (props) => {
  const {
    image, name, title, description,
  } = props;
  return (
    <div className="general-info-eco-item">
      <img alt={`${name} logo`} src={image} />
      <div className="general-info-eco-item-content">
        <div className="general-info-eco-item-content-name">{name}</div>
        <div className="general-info-eco-item-content-title">{title}</div>
        <div className="general-info-eco-item-content-description">{description}</div>
      </div>
    </div>
  );
};

GeneralInfoEco.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GeneralInfoEco;
