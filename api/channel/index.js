const express = require("express")
    , add     = require("./add")
    , router  = express.Router( );

router.use("/channel", add);

module.exports = router;
