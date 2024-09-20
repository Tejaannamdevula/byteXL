const http = require("http");
const fs = require("fs/promises");
const port = 4000;

const server = http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile("./index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`${data}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
});

server.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
