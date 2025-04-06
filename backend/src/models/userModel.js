const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String, 
        required: true,
        minLength: 4
    },

    avatar: {
        type: String
    }
}, {timestamps: true});

const userModel = model('userModel', userSchema);
module.exports = userModel;