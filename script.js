function adicionarAoCarrinho(produto) {
    alert(produto + " adicionado ao carrinho!");
}

document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagemSucesso').classList.remove('hidden');
    this.reset();
});
