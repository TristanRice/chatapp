const mongoose = require("mongoose")
    , unique   = require("mongoose-unique-validator")
    , bcrypt   = require("bcryptjs")
    , Schema   = mongoose.Schema;

const ChannelSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    users_logged_in: [
        {
            nick: {
                type: String
            }
        }
    ],
    messages: [
        {
            nickname: {
                type: String
            },
            content: {
                type: String
            },
            deleted: {
                type: Boolean,
                default: false
            },
            date: {
                type: Date,
            }
        }
    ]
});

ChannelSchema.plugin(unique);

module.exports = mongoose.model("Channel", ChannelSchema);
