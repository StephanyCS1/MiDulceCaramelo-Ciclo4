const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema(
    {
        idProd: {
            type: String,
            required: true,
            unique: true
        },
        category: {
            type: Boolean,
            required: true
        },
        descri: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price:
            {
                type: Number,
                required: true
            },
        cantidad:
            {
                type: Number,
                required: true
            }
    },
    {
        collection: 'Product',
        timestamps: true,
        versionKey: false
    }

);
module.exports = mongoose.model('Product', ProductSchema);
