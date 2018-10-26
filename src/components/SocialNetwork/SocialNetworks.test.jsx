import React from 'react';
import { configure, shallow } from 'enzyme';
import { noCallThru } from 'proxyquire';
import chai, { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';
import { SocialNetwork } from './SocialNetwork.jsx';

chai.should();
chai.use(sinonChai);

configure({ adapter: new Adapter() });
const proxyquire = noCallThru();
let socialNetworks;
const dispatchSpy = sinon.spy();
const socialNetworksActionSpy = sinon.spy();

const {
  mapStateToProps, mapDispatchToProps,
} = proxyquire('./SocialNetwork.jsx', {
  '../../actions/socialNetworks': {
    socialNetworksFetchData: socialNetworksActionSpy,
  },
});

describe('SocialNetwork', () => {
  beforeEach(() => {
    dispatchSpy.resetHistory();
    socialNetworksActionSpy.resetHistory();
    socialNetworks = {
      facebook: 'facebook URL',
      twitter: 'twitter URL',
      instagram: 'instagram URL',
      youtube: 'youtube URL',
      linkedin: 'linkedin URL',
    };
  });

  it('renders the SocialNetwork component', () => {
    const wrapper = shallow(
      <SocialNetwork
        socialNetworksFetch={() => {}}
        hasErrored={false}
        isLoading={false}
        socialNetworks={socialNetworks}
      />,
    );
    expect(wrapper.find('.social-network').children()).to.have.lengthOf(5);
  });

  it('renders the SocialNetwork component when hasErrored is true', () => {
    const wrapper = shallow(
      <SocialNetwork
        socialNetworksFetch={() => {}}
        hasErrored
        isLoading={false}
        socialNetworks={socialNetworks}
      />,
    );
    expect(wrapper.find('.social-network')).to.have.lengthOf(0);
  });

  it('renders the SocialNetwork component when isLoading is true', () => {
    const wrapper = shallow(
      <SocialNetwork
        socialNetworksFetch={() => {}}
        hasErrored={false}
        isLoading
        socialNetworks={socialNetworks}
      />,
    );
    expect(wrapper.find('.social-network')).to.have.lengthOf(0);
  });

  it('renders the SocialNetwork component when socialNetworks is empty', () => {
    const wrapper = shallow(
      <SocialNetwork
        socialNetworksFetch={() => {}}
        hasErrored={false}
        isLoading={false}
        socialNetworks={{}}
      />,
    );
    expect(wrapper.find('.social-network')).to.have.lengthOf(0);
  });

  it('test the mapStateToProps function', () => {
    const props = mapStateToProps({
      socialNetworks: {
        socialNetworks,
        hasErrored: false,
        isLoading: true,
      },
    });
    expect(props).to.have.be.deep.equal({
      socialNetworks,
      hasErrored: false,
      isLoading: true,
    });
  });

  it('test the mapDispatchToProps function', () => {
    mapDispatchToProps(dispatchSpy).socialNetworksFetch();
    expect(dispatchSpy).to.have.been.callCount(1);
    expect(socialNetworksActionSpy).to.have.been.callCount(1);
  });
});
