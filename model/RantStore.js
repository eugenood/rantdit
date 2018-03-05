class RantStore {
  constructor() {
    this.numRants = 0;
    this.rants = [];
  }

  addRant(message, user) {
    const newRant = {
      id: this.numRants,
      message,
      user,
      numVotes: 0
    };

    this.rants.push(newRant);
    this.numRants++;

    return newRant;
  }

  getRants() {
    return this.rants;
  }

  getLatestRants(n) {
    return this.rants.slice(Math.max(this.rants.length - n, 1));
  }

  upvoteRant(id) {
    this.rants[id].numVotes++;
  }

  downvoteRant(id) {
    this.rants[id].numVotes--;
  }
}

module.exports = RantStore;