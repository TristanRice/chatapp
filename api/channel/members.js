const express = require("express")
    , Channel = require("../../models/channels")
    , router  = express.Router( );

router.get("/:channel/members", function(req, res) {
    Channel.find({name: req.params.channel}, function(err, Chan) {
        if (!Chan || !Chan.length)
            return res.json({success: false, "error": "Channel not found"});

        return res.json({success: true, members: Chan[0].users_logged_in});
    });
});

module.exports = router;
