import React from 'react';
import PropTypes from 'prop-types';
import RantItem from './RantItem';

function RantList(props) {
  const rantItems = props.rants.map((rant) => {
    return (
      <RantItem
        key={rant.id}
        rant={rant}
        onUpvote={props.onUpvote}
        onDownvote={props.onDownvote}
      />
    );
  });

  return <div>{rantItems.reverse()}</div>;
}

RantList.propTypes = {
  rants: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
}

export default RantList;