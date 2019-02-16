const express = require("express")
    , Channel = require("../../models/channels")
    , router  = express.Router( );

router.post("/delete", function(req, res) {
    if (!req.body.name)
        return res.json({success: false, error: ["No name provided"]});

    Channel.remove({name: req.body.name}, function(err) {
        if (err)
            throw err;
    });
    return res.json({success: true});
});

module.exports = router;
