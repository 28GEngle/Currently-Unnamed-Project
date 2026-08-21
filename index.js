const http = require("http");
const fs = require("fs")

const server = http.createServer((request, response) => {
    response.writeHead(200)
    contents = fs.readFile('home.html',{encoding: "utf-8"}, (error,data) => {
        if (error) {
            console.log(error)
            throw error
        }
    })
    console.log(contents)
    while (contents == undefined || tick == 1000){
        response.end(contents)
    }
    response.end(contents)
})

const PORT = 3000
const HOST = "127.0.0.1"

server.listen(PORT, HOST, () => {
   console.log("running on port " + PORT)
})