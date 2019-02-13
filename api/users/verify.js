const express = require("express")
    , User    = require("../../models/user")
    , router  = express.Router( );

router.post("/verify", function(req, res) => {
    const incorrect_credentials = {
        success: false,
        errors: ["Incorrect credentials"]
    }
    if (!req.body.username || !req.body.password)
        return res.json({"success": false, errors: ["Please enter all fields"]});

    User.find({username: req.body.username}, function(err, User) {
        if (!User || !User.length || !User.password_verify(req.body.password))
            return res.json(incorrect_credentials);


    });
});
