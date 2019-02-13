const express = require("express")
    , api     = require("./api")
    , parser  = require("body-parser")
    , app     = express( );



app.use(parser.urlencoded({
	extended: true
}));

app.use(parser.json());

app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})

app.use(api);

app.listen(3000, ( ) => {
    console.log("listening on port 3000");
})
