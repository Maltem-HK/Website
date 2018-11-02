import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';
import SocialNetwork from './SocialNetwork.jsx';

configure({ adapter: new Adapter() });
let socialNetworks;

describe('SocialNetwork', () => {
  beforeEach(() => {
    socialNetworks = [
      { name: 'facebook', url: 'facebook URL' },
      { name: 'twitter', url: 'twitter URL' },
      { name: 'instagram', url: 'instagram URL' },
      { name: 'youtube', url: 'youtube URL' },
      { name: 'linkedin', url: 'linkedin URL' },
    ];
  });

  it('renders the SocialNetwork component', () => {
    const wrapper = shallow(
      <SocialNetwork
        socialNetworks={socialNetworks}
      />,
    );
    expect(wrapper.find('.social-network').children()).to.have.lengthOf(5);
  });

  it('renders the SocialNetwork component when socialNetworks is empty', () => {
    const wrapper = shallow(
      <SocialNetwork
        socialNetworks={[]}
      />,
    );
    expect(wrapper.find('.social-network').children()).to.have.lengthOf(0);
  });
});
