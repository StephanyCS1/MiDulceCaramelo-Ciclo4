const mongoose = require('mongoose'); //ayuda a encontrar obj, y a crear la plantilla segun se pida

const AdministradorSchema = new mongoose.Schema(
    {
        idAdm: {
            type: Number,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        collection: 'Administrador',
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Administrador', AdministradorSchema);
