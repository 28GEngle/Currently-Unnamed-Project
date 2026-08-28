const http = require("http");
const fs = require("fs");

async function readFile(filePath) {
    fs.readFile(filePath, "utf8", function (err, data) {
        promise = Promise.resolve(String(data));
        promise.then((value) => {
            return value
        })
    });
}

const server = http.createServer(function(req, res) {
    res.writeHead(200);
    try {
        res.end(readFile("home.html"))
    } catch (error) {
        console.log(readFile("home.html"))
    }
});

server.listen(3000,"127.0.0.1");