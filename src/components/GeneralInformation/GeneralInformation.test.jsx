import React from 'react';
import { noCallThru } from 'proxyquire';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';

const proxyquire = noCallThru();
configure({ adapter: new Adapter() });
let groupdescription;

const GeneralInformation = proxyquire('./GeneralInformation.jsx', {
  './GeneralInfoEco/GeneralInfoEco': '',
}).default;

describe('GeneralInformation', () => {
  beforeEach(() => {
    groupdescription = {
      description: 'Maltem description',
      groupentities: [
        {
          logo: {
            url: '',
          },
        },
      ],
      hasErrored: false,
      isLoading: false,
    };
  });

  it('renders the GeneralInformation component', () => {
    const wrapper = shallow(
      <GeneralInformation
        groupdescription={groupdescription}
      />,
    );
    expect(wrapper.find('.general-information').children()).to.have.lengthOf(3);
  });

  it('renders the GeneralInformation component when there is no description', () => {
    const wrapper = shallow(
      <GeneralInformation
        groupdescription={{}}
      />,
    );
    expect(wrapper.find('.general-information')).to.have.lengthOf(1);
  });
});
