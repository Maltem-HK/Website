import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';
import KeyFigures from './KeyFigures.jsx';

configure({ adapter: new Adapter() });
let keyFigures;

describe('KeyFigures', () => {
  beforeEach(() => {
    keyFigures = [
      {
        id: 1,
        title: 'revenue',
        figure: 300,
        description: 'our revenue (M USD / month)',
      },
      {
        id: 2,
        title: 'consultants',
        figure: 300000,
        description: 'consultant count',
      },
    ];
  });

  it('renders the KeyFigures component', () => {
    const wrapper = shallow(
      <KeyFigures
        keyFigures={keyFigures}
      />,
    );
    expect(wrapper.find('.figures').children()).to.have.lengthOf(2);
  });

  it('renders the KeyFigures component when keyFigures is empty', () => {
    const wrapper = shallow(
      <KeyFigures
        keyFigures={[]}
      />,
    );
    expect(wrapper.find('.figures').children()).to.have.lengthOf(0);
  });
});
