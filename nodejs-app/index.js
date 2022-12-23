const http = require('http');
const port = 3000;

http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node app running on port 3000 behind nginx on port 80');
}).listen(port, () => console.log(`Server is up and running on port ${port}`));
