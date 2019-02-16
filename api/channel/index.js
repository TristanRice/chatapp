const express = require("express")
    , add     = require("./add")
    , del     = require("./delete")
    , members = require("./members")
    , join    = require("./join")
    , router  = express.Router( );

//endpoints: /add
router.use("/", add);
//endpoints: /delete
router.use("/", del);
//endpoints: /onlineMembers, /members
router.use("/", members);
//endpoints: /join
router.use("/", join);

module.exports = router;
