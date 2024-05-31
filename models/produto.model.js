const mongoose = require('mongoose');
const Usuario = require('./usuario.model');

const produtoSchema = new mongoose.Schema({
    _id:{ type: mongoose.Schema.Types.ObjectId, 
        required: [true, "O id do produto é obrigatório"]},

    nome: {
        type: String,
        required: [true, "O nome do produto é obrigatório"],
    },
    preco: {
        type: Number,
        required: [true, "O preço do produto é obrigatório"],
        default: 0
    },
    descricao: {
        type: String,
        required: [true, "A descrição do produto é obrigatória"]
    },
    qtd_estoque: {
        type: Number,
        required: [true, "A quantidade em estoque é obrigatória"],
        default: 0
    },
    criado_em: {
        type: Date,
        default: Date.now
    },
    _idusuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usuario,
        required: [true, "O id do usuário é obrigatório"]
    },
    nome_usuario: {
        type: String,
        ref: Usuario,
        required: [true, "O nome do usuário é obrigatório"]
    }
}, { versionKey: false });

const Produto = mongoose.model('produto', produtoSchema);

module.exports = Produto;