const { XMLHttpRequest } = require('xmlhttprequest');
require('env2')('../.env');

const xhr = new XMLHttpRequest();

const trendingHandler = (req, res) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`;
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(xhr.responseText);
            } else {
                res.writeHead(500);
                res.end();
            }
        }
    };
    xhr.open('GET', url);
    xhr.send();
};

module.exports = trendingHandler;