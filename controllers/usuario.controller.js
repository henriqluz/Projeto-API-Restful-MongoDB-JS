const Usuario = require('../models/usuario.model');

const getUsuarios = async (req, res) => {
  
        try{
            const usuarios = await Usuario.find();
            res.status(200).json({usuarios});
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Erro ao buscar usuarios"});
        }
}

const getUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const usuario = await Usuario.findById(id);
        res.status(200).json({usuario});
        
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao buscar usuario"});
    }
}

const createUsuario = async (req, res) => {
    try{
        const usuario = await Usuario.create(req.body);
        res.status(201).json({usuario});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao criar usuario"});
    }
}

//atualizar usuario
const updateUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, req.body);

        if(!usuario){
            return res.status(404).json({message: "Usuario não encontrado"});
        }

        const updateUsuario = await Usuario.findById(id);
        res.status(200).json({updateUsuario});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao atualizar usuario"});
    }
};

//deletar usuario
const deleteUsuario = async (req, res) => {
    try{
        const {id} = req.params;
        const usuario = await Usuario.findByIdAndDelete(id);

        if(!usuario){
            return res.status(404).json({message: "Usuario não encontrado"});
        }

        res.status(200).json({message: "Usuario deletado com sucesso"});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao deletar usuario"});
    }
};

module.exports = { 
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
};


