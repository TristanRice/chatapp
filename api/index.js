const express = require("express")
    , user    = require("./users")
    , router  = express.Router( );

router.use("/api", user);

module.exports = router;
