/** ***************************Core Modules************************************ */
const fs = require('fs');
const path = require('path');

/** ***************************Code************************************ */
const moviesNamesHandler = (req, res) => {
    const filePath = path.join(__dirname, '..', 'data.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        }
    });
};

module.exports = moviesNamesHandler;
