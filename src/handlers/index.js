const homeHandler = require('./Home');
const errorHandler = require('./Error');
const publicHandler = require('./Public');
const moviesNamesHandler = require('./moviesNames');
const searchHandler = require('./search');
const exploreHandler = require('./explore');

module.exports = {
    homeHandler,
    errorHandler,
    publicHandler,
    moviesNamesHandler,
    searchHandler,
    exploreHandler,
};
