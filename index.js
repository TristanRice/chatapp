const express = require("express")
    , api     = require("./api")
    , parser  = require("body-parser")
    , http    = require("http")
    , socket  = require("socket.io")
    , mongo   = require("mongoose")
    , config  = require("./config.json")
    , app     = express( );

mongo.connect(config.database_url);

app.use(parser.urlencoded({
	extended: true
}));

app.use("/static", express.static("public"))

app.use(parser.json());

app.use("/api", api);

app.get("/", function(req, res) {
    return res.sendfile("./views/index.html");
});

const server = http.createServer(config.SERVER_PORT);

app.listen(config.SERVER_PORT, ( ) => {
    console.log("[*] Listening on port 3000");
})
