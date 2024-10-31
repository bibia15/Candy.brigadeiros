function adicionarAoCarrinho(produto) {
    alert(produto + " adicionado ao carrinho!");
}

document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagemSucesso').classList.remove('hidden');
    this.reset();
});
let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    alert(produto + " adicionado ao carrinho!");
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagemSucesso').classList.remove('hidden');
    this.reset();
});

// Carregar produtos no checkout
window.onload = function() {
    const listaProdutos = document.getElementById('listaProdutos');
    const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    produtosCarrinho.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = produto;
        listaProdutos.appendChild(li);
    });

    // Finalizar compra
    document.getElementById('finalizarCompraForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('mensagemSucessoCheckout').classList.remove('hidden');
        localStorage.removeItem('carrinho'); // Limpa o carrinho
        this.reset();
    });
};
