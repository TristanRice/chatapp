const express = require("express")
    , add     = require("./add")
    , router  = express.Router( );

router.use("/user", add);

module.exports = router;
