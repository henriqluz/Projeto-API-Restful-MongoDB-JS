const express = require('express');
const router = express.Router();
const Produto = require('../models/produto.model');
const {getProdutos, getProduto, createProduto, updateProduto, deleteProduto} = require('../controllers/produto.controller');

router.get('/', getProdutos);

router.get("/:id", getProduto);

router.post("/", createProduto);

//atualizar produto
router.put("/:id", updateProduto);

//deletar produto
router.delete("/:id", deleteProduto);

module.exports = router;