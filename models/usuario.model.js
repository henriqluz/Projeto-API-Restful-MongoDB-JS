const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    _id:{ type: Number, 
        required: [true, "O id do usuario é obrigatório"]},

    nome: {
        type: String,
        required: [true, "O nome do usuario é obrigatório"],
    },
    email: {
        type: String,
        required: [true, "O email do usuario é obrigatório"],
    },
    senha: {
        type: String,
        required: [true, "A senha do usuario é obrigatória"]
    },
    criado_em: {
        type: Date,
        default: Date.now
    },
},{ versionKey: false });

const Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario;