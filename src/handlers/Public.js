/** ***************************Core Modules************************************ */
const fs = require('fs');
const path = require('path');

/** ***************************Code************************************ */
const publicHandler = (request, response) => {
    const filesExtension = {
        html: 'text/html',
        css: 'text/css',
        jpg: 'image/jpeg',
        png: 'image/png',
        js: 'text/javascript',
        ico: 'image/x-icon',
    };
    const fileExtension = request.url.split('.')[1];
    const filePath = path.join(__dirname, '..', '..', request.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': filesExtension[fileExtension] });
            response.end(data);
        }
    });
};
module.exports = publicHandler;
