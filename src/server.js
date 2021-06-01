const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();


//serve files from dist
app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Server Listening on port:' + port)