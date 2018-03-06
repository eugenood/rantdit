import React from 'react';
import axios from 'axios';
import RantList from '../components/RantList';
import Composer from '../components/Composer';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.onCompose = this.onCompose.bind(this);
    this.onUpvote = this.onUpvote.bind(this);
    this.onDownvote = this.onDownvote.bind(this);
    this.state = {
      rants: []
    };
  }

  componentDidMount() {
    axios.get('/top/20')
      .then((res) => this.setState({ rants: res.data }))
      .catch((err) => console.log(err));
  }

  onCompose(message, user) {
    axios.post('/compose', { message, user })
      .then((res) => {
        this.setState({
          rants: [ ...this.state.rants, res.data ]
        });
        console.log(res.data);
      });
  }

  onUpvote(id) {
    axios.post('/upvote', { id })
    .then((res) => {
      const modifiedRants = this.state.rants.map((rant) => (
        (rant.id === id) ? Object.assign({}, rant, {numVotes: rant.numVotes + 1}) : rant
      ));
      this.setState({ rants: modifiedRants });
    });
  }

  onDownvote(id) {
    axios.post('/downvote', { id })
    .then((res) => {
      const modifiedRants = this.state.rants.map((rant) => (
        (rant.id === id) ? Object.assign({}, rant, {numVotes: rant.numVotes - 1}) : rant
      ));
      this.setState({ rants: modifiedRants });
    });
  }

  render() {
    return (
      <div>
        <Composer onCompose={this.onCompose} />
        <RantList
          rants={this.state.rants}
          onUpvote={this.onUpvote}
          onDownvote={this.onDownvote}
        />
      </div>
    );
  }
}

export default FrontPage;