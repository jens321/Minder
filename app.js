const express = require('express');
const app = express();

const PORT = 8080;

// Create middleware to load all static files
app.use('/', express.static(__dirname + '/public'));

// App listens on port 8080
app.listen(PORT);