import React from 'react';
import PropTypes from 'prop-types';

function RantItem(props) {
  return (
    <div>
      <p>{props.rant.message}</p>
      <p>posted by {props.rant.user}</p>
    </div>
  )
}

RantItem.propTypes = {
  rant: PropTypes.object.isRequired
};

export default RantItem;