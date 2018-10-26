import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';
import Application from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders the App component with 1 Route', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.children()).to.have.lengthOf(1);
  });
});
