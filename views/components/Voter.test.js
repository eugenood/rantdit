import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Voter from './Voter';

Enzyme.configure({ adapter: new Adapter() });

const rant = {
  id: 3,
  message: 'hello from world',
  user: 'nexolute',
  numVotes: 4
};

let onUpvoteCallbackId;

const onUpvote = (id) => {
  onUpvoteCallbackId = id;
}

let onDownvoteCallbackId;

const onDownvote = (id) => {
  onDownvoteCallbackId = id;
}

const wrapper = mount(
  <Voter
    rant={rant}
    onUpvote={onUpvote}
    onDownvote={onDownvote}
  />
);

describe('Voter', () => {

  test('renders the correct number of votes', () => {
    expect(wrapper.find('.voter-count').text()).toEqual(`${rant.numVotes} votes`);
  });

  test('callbacks when upvote-button is clicked', () => {
    wrapper.find('.upvote-button').simulate('click');
    expect(onUpvoteCallbackId).toEqual(rant.id);
  });

  test('callbacks when downvote-button is clicked', () => {
    wrapper.find('.downvote-button').simulate('click');
    expect(onDownvoteCallbackId).toEqual(rant.id);
  });

});