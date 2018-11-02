import React from 'react';
import { configure, shallow } from 'enzyme';
import { noCallThru } from 'proxyquire';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const proxyquire = noCallThru();
let welcomeWords;
let socialNetworks;

const Welcome = proxyquire('./Welcome.jsx', {
  '../SocialNetwork/SocialNetwork': '',
}).default;

describe('Welcome', () => {
  beforeEach(() => {
    welcomeWords = [{ id: 1, word: 'Maltem' }, { id: 2, word: 'Splendid' }];
    socialNetworks = [{ name: 'facebook', url: 'facebook URL' }];
  });

  it('renders the Welcome component', () => {
    const wrapper = shallow(
      <Welcome
        welcomeWords={welcomeWords}
        socialNetworks={socialNetworks}
      />,
    );
    expect(wrapper.find('h1').children()).to.have.lengthOf(2);
  });

  it('renders the Welcome component when welcomeWords is empty', () => {
    const wrapper = shallow(
      <Welcome
        welcomeWords={[]}
        socialNetworks={socialNetworks}
      />,
    );
    expect(wrapper.find('h1').children()).to.have.lengthOf(1);
  });
});
