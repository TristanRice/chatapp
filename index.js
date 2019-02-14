const express = require("express")
    , api     = require("./api")
    , parser  = require("body-parser")
    , mongo   = require("mongoose")
    , config  = require("./config.json")
    , app     = express( );

mongo.connect(config.database_url);

app.use(parser.urlencoded({
	extended: true
}));

app.use(parser.json());

app.use(api);

app.listen(config.SERVER_PORT, ( ) => {
    console.log("listening on port 3000");
})
