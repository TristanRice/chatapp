const express = require("express")
    , Channel = require("../../models/channels")
    , router  = express.Router( );

router.post("/add", function(req, res) {
    if (!req.body.name)
        return res.json({success: false, error: ["No name provided"]});

    let Chan = new Channel({name: req.body.name});
    Chan.save(function(err) {
        if (err)
            return res.json({success: false, error: ["that name is already taken"]});
        else
            return res.json({success: true});
    });
});

module.exports = router;
