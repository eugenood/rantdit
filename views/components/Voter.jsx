import React from 'react';
import PropTypes from 'prop-types';

class Voter extends React.Component {
  constructor(props) {
    super(props);
    this.onUpvote = this.onUpvote.bind(this);
    this.onDownvote = this.onDownvote.bind(this);
  }

  onUpvote(event) {
    event.preventDefault();
    this.props.onUpvote(this.props.rant.id);
  }

  onDownvote(event) {
    event.preventDefault();
    this.props.onDownvote(this.props.rant.id);
  }

  render() {
    return (
      <div className="voter">
        <button onClick={this.onDownvote}>-1</button>
        <button onClick={this.onUpvote}>+1</button>
        <p className="voter-count">{this.props.rant.numVotes} votes</p>
      </div>
    );
  }
}

Voter.propTypes = {
  rant: PropTypes.object,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
};

export default Voter;