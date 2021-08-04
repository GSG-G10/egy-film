/** ************************* Core Modules **************************** */
const fs = require('fs');
const path = require('path');

/** ***************************Code************************************ */
const homeHandler = (request, response) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end();
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    }
  });
};
module.exports = homeHandler;
