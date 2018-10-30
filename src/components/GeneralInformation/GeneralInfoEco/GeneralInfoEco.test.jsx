import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';
import GeneralInfoEco from './GeneralInfoEco.jsx';

configure({ adapter: new Adapter() });

describe('GeneralInfoEco', () => {
  it('renders the GeneralInfoEco component', () => {
    const wrapper = shallow(
      <GeneralInfoEco
        image="img url"
        name="item name"
        title="item title"
        description="item description"
      />,
    );
    expect(wrapper.find('.general-info-eco-item-content').children()).to.have.lengthOf(3);
  });
});
