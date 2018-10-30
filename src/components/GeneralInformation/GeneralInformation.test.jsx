import React from 'react';
import { noCallThru } from 'proxyquire';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';

const proxyquire = noCallThru();
configure({ adapter: new Adapter() });
let generalInformation;

const GeneralInformation = proxyquire('./GeneralInformation.jsx', {
  './GeneralInfoEco/GeneralInfoEco': '',
}).default;

describe('GeneralInformation', () => {
  beforeEach(() => {
    generalInformation = {
      description: 'Maltem description',
      hasErrored: false,
      isLoading: false,
    };
  });

  it('renders the GeneralInformation component', () => {
    const wrapper = shallow(
      <GeneralInformation
        generalinformation={generalInformation}
      />,
    );
    expect(wrapper.find('.general-information').children()).to.have.lengthOf(3);
  });

  it('renders the GeneralInformation component when there is no description', () => {
    const wrapper = shallow(
      <GeneralInformation
        generalinformation={{}}
      />,
    );
    expect(wrapper.find('.general-information')).to.have.lengthOf(1);
  });
});
