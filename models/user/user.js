const mongoose = require("mongoose")
    , unique   = require("mongoose-unique-validator")
    , bcrypt   = require("bcryptjs")
    , Schema   = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        validator: function(v) {

        }
    },
    email: {
        type: String,
        unique: true,
        validator: function(v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: props => `${props.value} is not a valid email address`
    },
    password: {
        type: String,
        required: [true, "password is required"],
        validator: function(v) {
            return /^.*(?=.{8,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(v);
        },
        message: props => `Your password must be at least 8 characters long, and contain a number and a capital letter`
    }
});

UserSchema.methods.hash_password = function( ) {
    this.password = bcrypt.hashSync(this.password, 10);
}

UserSchema.methods.password_verify = function(password) {
    return bcrypt.compareSync(password, this.password);
}

UserSchema.plugin(unique);

module.exports = mongoose.model("User", UserSchema);
