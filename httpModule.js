import * as http from "http";
import * as fs from "fs";
import * as url from "url";

const PORT = process.env.PORT || 8000;
const HOST = "localhost";
const jsonData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

const file1 = fs.readFileSync("./server_files/file1.html", "utf-8");
const file2 = fs.readFileSync("./server_files/file2.html", "utf-8");

const result = jsonData.map(item => {
    let output = file2.replace("{{%description%}}", item.description);
    output = output.replace("{{%place_id%}}", item["place_id"]);

    return output;
})

const finalResult = file1.replace("{{%Replacement%}}", result.join(""));

const server = http.createServer((req, res) => {
    let { query, pathname:path } = url.parse(req.url, true);
    console.log(query);

    if (path === "/about") {
        res.writeHead(202, "Good", {
            "Content-Type": "text/html",
            "My-Header": "Hi it's Shivendra's server",
        });
        fs.readFile("./server_files/about.html", "utf-8", (err, data) => {
            if (err) res.end("Something went wrong");
            res.end(data);
        });
    } else if (path === "/contact") {
        res.writeHead(202, "Good", {
            "Content-Type": "text/html",
            "My-Header": "Welcome to Shivendra's Server"
        });
        fs.readFile("./server_files/contact.html", "utf-8", (err, data) => {
            if (err) res.end("Something went wrong");
            res.end(data);
        });
    } else if (path === "/data") {
        res.writeHead(404, "Good", {
            "Content-Type": "text/html",
        })
        res.end(finalResult);

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