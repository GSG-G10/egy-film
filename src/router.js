const { homeHandler, errorHandler, publicHandler } = require('./handlers');

/** ***************************Code************************************ */
const router = (request, response) => {
  if (request.url === '/') {
    homeHandler(request, response);
  } else if (request.url.includes('public')) {
    publicHandler(request, response);
  } else {
    errorHandler(request, response);
  }
};

module.exports = router;
