const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    tag: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },

    images: {
        type: [String],
        validate: {
            validator: function(v) {
                return v.length>0;
            },
            message: 'at least 1 image URL is required'
        }
    }
}, {timestamps: true});

const productModel = model('productModel', productSchema);
module.exports = productModel;