const express = require ('express');
const mongoose = require ('mongoose');
const Produto = require ('./models/produto.model.js');
const Usuario = require ('./models/usuario.model.js');
const produtoRoute = require ('./routes/produto.route.js');
const usuarioRoute = require ('./routes/usuario.route.js');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/crud/produtos', produtoRoute);
app.use('/crud/usuarios', usuarioRoute);


app.get("/", (req, res) => {
    res.send("Hello World");    
});



mongoose.connect("mongodb://localhost:27017/crud").then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000, () => {
        console.log("Server esta rodando na porta 3000");
    });
    
}).catch((err) => {
    console.log("Erro ao conectar ao banco de dados");
});
