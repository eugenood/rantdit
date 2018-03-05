const express = require('express');

const app = express();
const port = process.env.API_PORT || 3001;

app.listen(port);