# rantdit
Simple Reddit clone for Carousell coding challenge. Try out live at :zap: https://rantdit.herokuapp.com :zap:

## Motivation
Instead of doing a Reddit clone, I decided to make something revolving around ranting (like devRants).
I think this is fine because it possessed the same feature set as what is required for the challenge.

## Setup
Clone the repo, and run

```bash
yarn
yarn build
yarn start
```

## Frontend
The frontend is written in React, and bundled by Parcel.

## Backend
The backend is supported by Express. It serves the static bundle and exposes four API endpoints.

### Get top rants
`GET /top/:numResults`

### Compose new rant
`POST /compose`
```javascript
payload = {
  message: [string],
  user: [string]
}
```

### Upvote rant
`POST /downvote`
```javascript
payload = {
  id: [integer]
}
```

### Downvote rant
`POST /upvote`
```javascript
payload = {
  id: [integer]
}
```

## Data structure
The rants are stored and managed by `RantManager`. It stores the rants using an array.
Each rant can be accessed through indexing it with its id. That is, the rant with
`id = 3` can be accessed with `this.rants[3]` within `RantManager`.

In order to return the top rants, I used a SortedArray from the collections.js library.
Under the hook, it uses a binary search tree, thus insertion and deletion only cost
O(lg n). To retrieve the top rants, we simply have to transverse the BST, which is
O(k) for getting k top rants.