import React from 'react';
import { configure, shallow } from 'enzyme';
import { noCallThru } from 'proxyquire';
import chai, { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';
import { Welcome } from './Welcome.jsx';

chai.should();
chai.use(sinonChai);

configure({ adapter: new Adapter() });
const proxyquire = noCallThru();
let words;
const dispatchSpy = sinon.spy();
const welcomeActionSpy = sinon.spy();

const {
  mapStateToProps, mapDispatchToProps,
} = proxyquire('./Welcome.jsx', {
  '../../actions/welcome': {
    welcomeFetchData: welcomeActionSpy,
  },
});

describe('Welcome', () => {
  beforeEach(() => {
    dispatchSpy.resetHistory();
    welcomeActionSpy.resetHistory();
    words = [{ id: 1, word: 'Maltem' }, { id: 2, word: 'Splendid' }];
  });

  it('renders the Welcome component', () => {
    const wrapper = shallow(
      <Welcome
        fetchWelcome={() => {}}
        hasErrored={false}
        isLoading={false}
        words={words}
      />,
    );
    expect(wrapper.find('h1').children()).to.have.lengthOf(2);
  });

  it('renders the Welcome component when hasErrored is true', () => {
    const wrapper = shallow(
      <Welcome
        fetchWelcome={() => {}}
        hasErrored
        isLoading={false}
        words={words}
      />,
    );
    expect(wrapper.find('h1').children()).to.have.lengthOf(1);
  });

  it('renders the Welcome component when isLoading is true', () => {
    const wrapper = shallow(
      <Welcome
        fetchWelcome={() => {}}
        hasErrored={false}
        isLoading
        words={words}
      />,
    );
    expect(wrapper.find('h1').children()).to.have.lengthOf(1);
  });

  it('renders the Welcome component when words is empty', () => {
    const wrapper = shallow(
      <Welcome
        fetchWelcome={() => {}}
        hasErrored={false}
        isLoading={false}
        words={[]}
      />,
    );
    expect(wrapper.find('h1').children()).to.have.lengthOf(1);
  });

  it('test the mapStateToProps function', () => {
    const props = mapStateToProps({ welcome: { words, hasErrored: false, isLoading: true } });
    expect(props).to.have.be.deep.equal({
      words,
      hasErrored: false,
      isLoading: true,
    });
  });

  it('test the mapDispatchToProps function', () => {
    mapDispatchToProps(dispatchSpy).fetchWelcome();
    expect(dispatchSpy).to.have.been.callCount(1);
    expect(welcomeActionSpy).to.have.been.callCount(1);
  });
});
