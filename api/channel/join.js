const express = require("express")
    , Channel = require("../../models/channels")
    , router  = express.Router( );

router.post("/:channel/join", function(req, res) {
    if (!req.body.nickname)
        return res.json({success: false, errors: ["no nickname sent"]});

    Channel.findOneAndUpdate(
        {name : req.params.channel},
        {$push: {'users_logged_in': {"nick": req.body.nickname}}},
        function(err, success) {
            if (err)
                console.log(err);
            if (!success)
                return res.json({success: false})
        }
    );
    return res.json({success: true})
});

module.exports = router;
