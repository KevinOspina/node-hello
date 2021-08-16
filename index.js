const http = require('http');
const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
  server.timeout = 2000;
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
