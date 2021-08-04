const errorHandler = (request, response) => {
    response.writeHead(404);
    response.end();
};
module.exports = errorHandler;
