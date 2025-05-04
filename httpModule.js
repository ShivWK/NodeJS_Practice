import * as http from "http";
import * as fs from "fs";

const PORT = process.env.PORT || 8000;
const HOST = "localhost";

const server = http.createServer((req, res) => {
    console.log("Request Received");
    const path = req.url?.toLowerCase();

    if (path === "/about") {
        res.writeHead(202, "Good", {
            "Content-Type": "text/html",
            "My-Header": "Hi it's Shivendra's server",
        });
        fs.readFile("./server_files/about.html", "utf-8", (err, data) => {
            if(err) res.end("Something went wrong");
            res.end(data);
        });
    } else if (path === "/contact") {
        res.writeHead(202, "Good", {
            "Content-Type": "text/html",
            "My-Header": "Welcome to Shivendra's Server"
        });
        fs.readFile("./server_files/contact.html", "utf-8", (err, data) => {
            if(err) res.end("Something went wrong");
            res.end(data);
        });
    } else {
        res.writeHead(404, "Not found", {
            "Content-Type": "text/html",
            "My-Header": "What you want man from me!"
        });
        res.end("<p>Page not found</p>");
    }
 })

server.listen(PORT, HOST, () => {
    console.log("Server Started")
});