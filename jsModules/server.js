const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1> GET Method</h1>");
  } else if (req.method == "POST") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1> POST Method</h1>");
    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1>Invalid Method</h1>");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
