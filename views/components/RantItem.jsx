import React from 'react';
import PropTypes from 'prop-types';
import Voter from './Voter';

function RantItem(props) {
  return (
    <div>
      <p>{props.rant.message}</p>
      <p>posted by {props.rant.user}</p>
      <Voter rant={props.rant} />
    </div>
  )
}

RantItem.propTypes = {
  rant: PropTypes.object.isRequired
};

export default RantItem;