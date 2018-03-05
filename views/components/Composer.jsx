import React from 'react';
import PropTypes from 'prop-types';

class Composer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const user = event.target[0].value;
    const message = event.target[1].value;
    this.props.onCompose(message, user);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="user" placeholder="User" />
        <input type="text" name="message" placeholder="Message" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Composer.propTypes = {
  onSubmit: PropTypes.func
};

export default Composer;