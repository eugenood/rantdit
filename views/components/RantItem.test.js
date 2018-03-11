import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RantItem from './RantItem';

Enzyme.configure({ adapter: new Adapter() });

const rant = {
  id: 3,
  message: 'hello from world',
  user: 'nexolute',
  numVotes: 4
};

const onUpvote = (id) => {
  console.log(id);
};

const onDownvote = (id) => {
  console.log(id);
};

const wrapper = shallow(
  <RantItem
    rant={rant}
    onUpvote={onUpvote}
    onDownvote={onDownvote}
  />
);

describe('RantItem', () => {

  test('renders user name correctly', () => {
    expect(wrapper.find('.rant-user').text()).toEqual(`posted by ${rant.user}`);
  });

  test('renders message correctly', () => {
    expect(wrapper.find('.rant-message').text()).toEqual(rant.message);
  });

});