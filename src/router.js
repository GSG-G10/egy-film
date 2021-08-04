const {
  homeHandler, errorHandler, publicHandler, moviesNamesHandler,
} = require('./handlers');

/** ***************************Code************************************ */
const router = (request, response) => {
  const endpoint = request.url;
  const { method } = request;
  if (endpoint === '/' && method === 'GET') {
    homeHandler(request, response);
  } else if (endpoint.includes('public') && method === 'GET') {
    publicHandler(request, response);
  } else if (endpoint === '/movies-names' && method === 'GET') {
    moviesNamesHandler(request, response);
  } else {
    errorHandler(request, response);
  }
};

module.exports = router;
