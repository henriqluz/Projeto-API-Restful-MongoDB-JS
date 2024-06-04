function carregarDados() {
    fetch('http://localhost:3000/crud/produtos')
      .then(response => response.json())
      .then(data => {
        let tabela = document.getElementById('tabelaProdutos');
        tabela.innerHTML = '';
        data.produtos.forEach(item => {
          let linha = tabela.insertRow();
          let celulaId = linha.insertCell();
          let celulaNome = linha.insertCell();
          let celulaPreco = linha.insertCell();
          let celulaDescricao = linha.insertCell();
          let celulaQtdEstoque = linha.insertCell();
          let celulaIdUsuario = linha.insertCell();
          let celulaNomeUsuario = linha.insertCell();
          let celulaCriadoEm = linha.insertCell();
          let celulaAlterar = linha.insertCell();
          let celulaExcluir = linha.insertCell();
          
          celulaId.textContent = item._id;
          celulaNome.textContent = item.nome;
          celulaPreco.textContent = item.preco;
          celulaDescricao.textContent = item.descricao;
          celulaQtdEstoque.textContent = item.qtd_estoque;
          celulaIdUsuario.textContent = item._idusuario;
          celulaNomeUsuario.textContent = item.nome_usuario;
          celulaCriadoEm.textContent = new Date(item.criado_em).toLocaleString();
  
          let botaoAlterar = document.createElement('button');
          let botaoExcluir = document.createElement('button');
          botaoAlterar.textContent = 'Alterar';
          botaoExcluir.textContent = 'Excluir';
          //Alterar
          botaoAlterar.onclick = function() {
                window.location.href = `../views/AlterarProduto.html?id=${item._id}`;
          };
          
        //Excluir
          botaoExcluir.onclick = function() {
              fetch(`http://localhost:3000/crud/produtos/${item._id}`, {
                  method: 'DELETE',
                })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Erro na exclusão');
                  }
                  // Recarregar os dados após a exclusão
                  carregarDados();
                })
                .catch(error => console.error('Erro:', error));
          };
          celulaAlterar.appendChild(botaoAlterar);
          celulaExcluir.appendChild(botaoExcluir);
        });
      })
      .catch(error => console.error('Erro:', error));
  }
  
  // Chamar a função carregarDados() quando a página é carregada
  carregarDados();
  