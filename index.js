const http = require("http");
const fs = require("fs");

contents = fs.readFileSync("home.html", "utf8", function (err, data) {
    return data;
});

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end(contents);
});

server.listen(3000, "127.0.0.1");