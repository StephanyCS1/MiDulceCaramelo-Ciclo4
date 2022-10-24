const mongoose = require('mongoose');

const CotizacionSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        nameUs: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        orderId: {
            type: String,
            required: true
        },
        products: [ {
            type: mongoose.Types.ObjectId,
            ref: 'Product' // se enlaza con el nombre del modelo
        } ]
    },
    {
        collection: 'Cotizacion',
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Cotizacion', CotizacionSchema);
