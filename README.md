# Nome do Projeto

## Descrição do Projeto

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) que utiliza Node.js, Express e MongoDB para gerenciar usuários e produtos.

## Configuração do Ambiente

1. Instale o Node.js e o npm em seu sistema.
2. Clone este repositório para sua máquina local.
3. Navegue até a pasta do projeto e execute `npm install` para instalar todas as dependências listadas no arquivo `package.json`. As principais bibliotecas utilizadas são:
   - Express: Framework web para Node.js
   - Mongoose: Biblioteca do MongoDB para Node.js
   - MongoDB: Banco de dados NoSQL
   - Nodemon: Utilitário que monitora quaisquer alterações no seu código-fonte e reinicia automaticamente o servidor
4. Instale o MongoDB Compass para gerenciar seu banco de dados MongoDB.
5. Conecte-se ao seu banco de dados MongoDB usando o MongoDB Compass.

## Execução da Aplicação

1. Inicie o servidor executando `npm run serve` ou `npm run dev` para o modo de desenvolvimento.
2. O servidor estará rodando na porta 3000.

## Exemplos de Requisições

- **Create** (POST `/crud/usuarios` ou `/crud/produtos`): Cria um novo usuário ou produto.
- **Read All** (GET `/crud/usuarios` ou `/crud/produtos`): Lê as informações de todos os usuários ou produtos.
- **Read One** (GET `/crud/usuarios/:id` ou `/crud/produtos/:id`): Lê as informações de um usuário ou produto específico.
- **Update** (PUT `/crud/usuarios/:id` ou `/crud/produtos/:id`): Atualiza as informações de um usuário ou produto específico.
- **Delete** (DELETE `/crud/usuarios/:id` ou `/crud/produtos/:id`): Deleta um usuário ou produto específico.

## Demonstração dos Testes

Para testar as operações CRUD, foi utilizado o Thunder Client do VS Code. Aqui estão alguns exemplos de como você pode testar cada operação:

- **Create**: Para criar um novo usuário ou produto, faça uma requisição POST para `/crud/usuarios` ou `/crud/produtos` com o corpo da requisição contendo os detalhes do usuário ou produto.
- **Read All**: Para ler as informações de todos os usuários ou produtos, faça uma requisição GET para `/crud/usuarios` ou `/crud/produtos`.
- **Read One**: Para ler as informações de um usuário ou produto, faça uma requisição GET para `/crud/usuarios/:id` ou `/crud/produtos/:id`, substituindo `:id` pelo ID do usuário ou produto.
- **Update**: Para atualizar as informações de um usuário ou produto, faça uma requisição PUT para `/crud/usuarios/:id` ou `/crud/produtos/:id`, substituindo `:id` pelo ID do usuário ou produto. O corpo da requisição deve conter as informações atualizadas.
- **Delete**: Para deletar um usuário ou produto, faça uma requisição DELETE para `/crud/usuarios/:id` ou `/crud/produtos/:id`, substituindo `:id` pelo ID do usuário ou produto.

## Documentação

Este README.md fornece todas as informações necessárias para configurar o ambiente, executar a aplicação e realizar operações CRUD. Se você tiver alguma dúvida, sinta-se à vontade para abrir uma issue.
