const url = require('url');
const {
    homeHandler,
    errorHandler,
    publicHandler,
    moviesNamesHandler,
    searchHandler,
    trendingHandler,
} = require('./handlers');

/** ***************************Code************************************ */
const router = (request, response) => {
    const urlObj = url.parse(request.url);
    const endpoint = urlObj.pathname;
    const { method } = request;
    const param = urlObj.query;
    if (endpoint === '/' && method === 'GET') {
        homeHandler(request, response);
    } else if (endpoint.includes('public') && method === 'GET') {
        publicHandler(request, response);
    } else if (endpoint === '/movies-names' && method === 'GET') {
        moviesNamesHandler(request, response);
    } else if (endpoint === '/movie-search' && method === 'GET') {
        searchHandler(request, response, param);
    } else if (endpoint === '/trending' && method === 'GET') {
        trendingHandler(request, response);
    } else {
        errorHandler(request, response);
    }
};

module.exports = router;
