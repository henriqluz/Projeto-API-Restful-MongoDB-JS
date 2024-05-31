const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    _id:{ type: Number, 
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
}, { versionKey: false });

const Produto = mongoose.model('produto', produtoSchema);

module.exports = Produto;