window.onload = function() {
    // Obter o ID do produto da URL
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
  
    // Buscar os detalhes do produto
    fetch(`http://localhost:3000/crud/produtos/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // Preencher os campos com os detalhes do produto
        document.getElementById('id').value = data.produto._id;
        document.getElementById('name').value = data.produto.nome;
        document.getElementById('description').value = data.produto.descricao;
        document.getElementById('price').value = data.produto.preco;
        document.getElementById('quantity').value = data.produto.qtd_estoque;
        document.getElementById('id_usuario').value = data.produto._idusuario;
        document.getElementById('name_usuario').value = data.produto.nome_usuario;
      })
      .catch(error => console.error('Erro:', error));
  
    document.getElementById('formAlterarProduto').addEventListener('submit', atualizarProduto);
  
    function atualizarProduto(event) {
      // Impedir que o formulário seja enviado normalmente
      event.preventDefault();
  
      // Obter os valores dos campos do formulário
      let nome = document.getElementById('name').value;
      let descricao = document.getElementById('description').value;
      let preco = document.getElementById('price').value;
      let qtd_estoque = document.getElementById('quantity').value;
      let _idusuario = document.getElementById('id_usuario').value;
      let nome_usuario = document.getElementById('name_usuario').value;
  
      // Criar um objeto com os novos valores
      let produtoAtualizado = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        qtd_estoque: qtd_estoque,
        _idusuario: _idusuario,
        nome_usuario: nome_usuario
      };
  
      // Enviar a solicitação de atualização para o servidor
      fetch(`http://localhost:3000/crud/produtos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produtoAtualizado)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na atualização');
        }
        alert('Produto atualizado com sucesso!');
        window.location.href = `index.html`;
      })
      .catch(error => console.error('Erro:', error));
    }
  }
  