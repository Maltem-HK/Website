import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';
import Team from './Team.jsx';

configure({ adapter: new Adapter() });
let team;

describe('Team', () => {
  beforeEach(() => {
    team = {
      members: [
        {
          id: 1,
          firstName: 'bob',
          lastName: 'Rayman',
          photo: {
            url: 'photo url!',
          },
        },
        {
          id: 2,
          firstName: 'bob',
          lastName: 'Moran',
        },
      ],
    };
  });

  it('renders the Team component', () => {
    const wrapper = shallow(
      <Team
        team={team}
      />,
    );
    expect(wrapper.find('.team').children()).to.have.lengthOf(2);
  });

  it('renders the Team component when team is empty', () => {
    const wrapper = shallow(
      <Team
        team={{ members: [] }}
      />,
    );
    expect(wrapper.find('.team').children()).to.have.lengthOf(0);
  });
});
