const SortedArray = require('collections/sorted-array');

class RantManager {

  // RantManager stores all its rants using an array. Each rant can
  // be accessed through indexing it with its id. That is, the rant
  // with id = 3 can be accessed with this.rants[3].
  //
  // In order to return the top rants, I used a SortedArray from the
  // collections.js library. Under the hook, it uses a binary search
  // tree, thus insertion and deletion only cost O(lg n). To retrieve
  // the top rants, we simply have to transverse the BST.

  constructor() {
    this.rants = [];
    this.sortedRants = new SortedArray();

    this.sortedRants.contentCompare = function(rant1, rant2) {
      const numVotesDiff = rant1.numVotes - rant2.numVotes;

      if (numVotesDiff === 0) {
        return rant1.id - rant2.id;
      } else {
        return numVotesDiff;
      }
    }

    this.sortedRants.contentEquals = function(rant1, rant2) {
      return rant1.id === rant2.id;
    }
  }

  // Add a new rant.
  //
  // @param message The message for the rant.
  // @param user The name of the user who composed the rant.
  // @return The new rant.

  addRant(message, user) {
    const newRant = {
      id: this.rants.length,
      message,
      user,
      numVotes: 0
    };

    this.rants.push(newRant);
    this.sortedRants.push(newRant);

    return newRant;
  }

  // Get the top n rants.
  //
  // @param n The number of rants to be returned. If there are less
  //          than n rants, returns all rants.

  getTopRants(n) {
    return this.sortedRants.slice(this.sortedRants.length - n);
  }

  // Upvote the rant by its id.
  //
  // @param id The id of the rant to be upvoted.

  upvoteRant(id) {
    const rant = this.rants[id];
    this.sortedRants.delete(rant);
    rant.numVotes++;
    this.sortedRants.add(rant);
  }

  // Downvote the rant by its id.
  //
  // @param id The id of the rant to be downvoted.

  downvoteRant(id) {
    const rant = this.rants[id];
    this.sortedRants.delete(rant);
    rant.numVotes--;
    this.sortedRants.add(rant);
  }

}

module.exports = RantManager;