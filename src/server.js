const http = require('http');
require('env2')('.env');

const port = process.env.PORT || 4000;

const router = require('./router');

http.createServer(router).listen(port);
