import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RantList from './RantList';

Enzyme.configure({ adapter: new Adapter() });

const rants = [
  {
    id: 3,
    message: 'hello from world',
    user: 'nexolute',
    numVotes: 4
  },
  {
    id: 7,
    message: 'another message',
    user: 'anotherguy1',
    numVotes: 1
  },
  {
    id: 4,
    message: 'this is not lorem ipsum',
    user: 'trippy99',
    numVotes: 0
  },
];

const onUpvote = (id) => {
  console.log(id);
};

const onDownvote = (id) => {
  console.log(id);
};

const wrapper = shallow(
  <RantList
    rants={rants}
    onUpvote={onUpvote}
    onDownvote={onDownvote}
  />
);

describe('RantList', () => {

  test('renders the correct number of rants', () => {
    expect(wrapper.find('.rant-items').children()).toHaveLength(rants.length);
  });

});