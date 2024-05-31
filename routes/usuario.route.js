const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');
const { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuario.controller');


router.get('/', getUsuarios);

router.get("/:id", getUsuario);

router.post("/", createUsuario);

//atualizar produto
router.put("/:id", updateUsuario);

//deletar produto
router.delete("/:id", deleteUsuario);

module.exports = router;