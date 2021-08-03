const http = require('http');
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 4000;

http.createServer().listen(port, hostname, () => {
    console.log(`Server running at port http://${hostname}:${port}`)
});