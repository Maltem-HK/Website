import React from 'react';
import PropTypes from 'prop-types';
import GeneralInfoEco from './GeneralInfoEco/GeneralInfoEco';
import IconFuturs from '../../assets/img/mug-futurs.png';
import IconGuiz from '../../assets/img/mug-guiz.png';
import IconFrianbiz from '../../assets/img/mug-frianbiz.png';
import IconMIP from '../../assets/img/mug-mip.png';
import IconBocasay from '../../assets/img/mug-bocasay.png';
import IconDesignLab from '../../assets/img/mug-design-lab.png';
import './generalinformation.scss';

const GeneralInformation = ({ generalinformation: { description } }) => (
  <div className="general-information">
    <div className="general-information-title">Maltem Consulting Group</div>
    {description
    && <div className="general-information-description">{description}</div>
    }
    <div className="general-information-ecosystem">
      <GeneralInfoEco
        image={IconFuturs}
        name="Futurs"
        title="Product and communication consulting agency"
        description="Emerging technologies, Innovative usages, POC"
      />
      <GeneralInfoEco
        image={IconMIP}
        name="Maltem Insight Performance"
        title="Product and communication consulting agency"
        description="Emerging technologies, Innovative usages, POC"
      />
      <GeneralInfoEco
        image={IconGuiz}
        name="Guiz"
        title="Product and communication consulting agency"
        description="Emerging technologies, Innovative usages, POC"
      />
      <GeneralInfoEco
        image={IconBocasay}
        name="Bocasay"
        title="Product and communication consulting agency"
        description="Emerging technologies, Innovative usages, POC"
      />
      <GeneralInfoEco
        image={IconFrianbiz}
        name="Frianbiz"
        title="Product and communication consulting agency"
        description="Emerging technologies, Innovative usages, POC"
      />
      <GeneralInfoEco
        image={IconDesignLab}
        name="Maltem Design Lab Asia"
        title="Product and communication consulting agency"
        description="Emerging technologies, Innovative usages, POC"
      />
    </div>
  </div>
);

GeneralInformation.propTypes = {
  generalinformation: PropTypes.objectOf(String).isRequired,
};

export default GeneralInformation;
