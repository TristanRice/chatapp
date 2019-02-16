const express = require("express")
    , user    = require("./users")
    , channel = require("./channel")
    , router  = express.Router( );

router.use("/user", user);
router.use("/channel", channel)
module.exports = router;
