const express = require("express")
    , Channel = require("../../models/channel")
    , router  = express.Router( );

router.post("/add", function(req, res) {
    if (!req.body.name)
        return res.json({success: false, error: ["No name provided"]});

    Channel.save(function(err) {
        if (err)
            return res.json({success: false, error: ["that name is already taken"]});
    });

    return res.json({success: true});
});

module.exports = router;
