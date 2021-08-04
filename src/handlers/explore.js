const fs = require('fs');
const path = require('path');

const exploreHandler = (req, res) => {
    const filePath = path.join(
        __dirname,
        '..',
        '..',
        'public',
        'explore-page',
        'explore.html',
    );
    fs.readFile(filePath, (error, data) => {
        if (error) {
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
};
module.exports = exploreHandler;
