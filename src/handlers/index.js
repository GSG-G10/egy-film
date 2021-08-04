const homeHandler = require('./Home');
const errorHandler = require('./Error');
const publicHandler = require('./Public');
const moviesNamesHandler = require('./moviesNames');
const searchHandler = require('./search');
const trendingHandler = require('./trending');

module.exports = {
    homeHandler,
    errorHandler,
    publicHandler,
    moviesNamesHandler,
    searchHandler,
    trendingHandler,
};
