const Produto = require('../models/produto.model');

const getProdutos = async (req, res) => {
  
        try{
            const produtos = await Produto.find();
            res.status(200).json({produtos});
        }catch(error){
            console.log(error);
            res.status(500).json({message: "Erro ao buscar produtos"});
        }
}

const getProduto = async (req, res) => {
    try{
        const {id} = req.params;
        const produto = await Produto.findById(id);
        res.status(200).json({produto});
        
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao buscar produto"});
    }
}

const createProduto = async (req, res) => {
    try{
        const produto = await Produto.create(req.body);
        res.status(201).json({produto});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao criar produto"});
    }
}

//atualizar produto
const updateProduto = async (req, res) => {
    try{
        const {id} = req.params;
        const produto = await Produto.findByIdAndUpdate(id, req.body);

        if(!produto){
            return res.status(404).json({message: "Produto não encontrado"});
        }

        const updateProduto = await Produto.findById(id);
        res.status(200).json({updateProduto});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao atualizar produto"});
    }
};

const deleteProduto = async (req, res) => {
    try{
        const {id} = req.params;
        const produto = await Produto.findByIdAndDelete(id);

        if(!produto){
            return res.status(404).json({message: "Produto não encontrado"});
        }

        res.status(200).json({message: "Produto deletado com sucesso"});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Erro ao deletar produto"});
    }
};

module.exports = { 
    getProdutos,
    getProduto,
    createProduto,
    updateProduto,
    deleteProduto
};


