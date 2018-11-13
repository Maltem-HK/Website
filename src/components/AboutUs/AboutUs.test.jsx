import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';
import AboutUs from './AboutUs.jsx';

configure({ adapter: new Adapter() });
let aboutUs;

describe('AboutUs', () => {
  beforeEach(() => {
    aboutUs = {
      aboutcontents: [
        {
          id: 1,
          content: '',
          picture: {
            url: '',
          },
        },
        {
          id: 2,
          content: '',
          picture: {
            url: '',
          },
        },
      ],
    };
  });

  it('renders the AboutUs component', () => {
    const wrapper = shallow(
      <AboutUs
        about={aboutUs}
      />,
    );
    expect(wrapper.find('.contact-content-items').children()).to.have.lengthOf(2);
  });

  it('renders the KeyFigures component when keyFigures is empty', () => {
    aboutUs.aboutcontents = [];
    const wrapper = shallow(
      <AboutUs
        about={aboutUs}
      />,
    );
    expect(wrapper.find('.contact-content-items').children()).to.have.lengthOf(0);
  });
});
