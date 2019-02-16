const express = require("express")
    , Channel = require("../../../models/channels")
    , send    = require("./send")
    , router  = express.Router( );

router.get("/:channel/messages", function(req, res)) {
    const channel = req.params.channel;

    Channel.find({name: channel}, function(err, Channnel) {
        if (!Channel || !Channel.length)
            return res.json({success: false, errors: ["Channel not found"]});

        return res.json({success: true, messages: Channel.messages});
    });
});
