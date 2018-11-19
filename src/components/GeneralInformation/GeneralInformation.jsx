import React from 'react';
import PropTypes from 'prop-types';
import GeneralInfoEco from './GeneralInfoEco/GeneralInfoEco';
import config from '../../config';
import './generalinformation.scss';

const GeneralInformation = ({
  groupdescription,
  groupdescription: {
    groupentities,
  },
}) => (
  <div className="general-information">
    <div className="general-information-title main-title"><span>Maltem Consulting Group</span></div>
    {groupdescription.description
    && <div className="general-information-description">{groupdescription.description}</div>
    }
    <div className="general-information-ecosystem">
      {groupentities
        && groupentities.map(({
          id,
          logo,
          name,
          title,
          description,
        }) => (
          <GeneralInfoEco
            key={id}
            image={`${config.backendURL}${logo.url}`}
            name={name}
            title={title}
            description={description}
          />
        ))
      }
    </div>
  </div>
);

GeneralInformation.propTypes = {
  groupdescription: PropTypes.objectOf(String).isRequired,
};

export default GeneralInformation;
