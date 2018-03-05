import React from 'react';
import PropTypes from 'prop-types';
import Voter from './Voter';

function RantItem(props) {
  return (
    <div className="rant-item">
      <p className="rant-message">{props.rant.message}</p>
      <p>posted by {props.rant.user}</p>
      <Voter
        rant={props.rant}
        onUpvote={props.onUpvote}
        onDownvote={props.onDownvote}
      />
    </div>
  )
}

RantItem.propTypes = {
  rant: PropTypes.object.isRequired,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired
};

export default RantItem;