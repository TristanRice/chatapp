const express = require("express")
    , User    = require("../../models/user")
    , router  = express.Router( );

router.post("/add", function(req, res) {
    if (!req.body.username || !req.body.password || !req.body.email)
        return res.json({"success": false, errors: ["Please enter all fields"]});

    user = new User({
        "username": req.body.username,
        "password": req.body.password,
        "email":    req.body.email
    });
    user.hash_password( );
    errors = user.validateSync( );

    if (errors)
        return res.json({"success": false, errors: errors});

    return res.json({"success": true});
});

module.exports = router;
