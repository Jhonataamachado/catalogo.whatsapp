let carrinho = [];
let totalItens = 0;

function adicionarCarrinho(nomeProduto, preco) {
    carrinho.push({ nome: nomeProduto, preco: preco });
    totalItens++;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    document.getElementById('qtd-itens').innerText = totalItens;
}

function enviarPedido() {
    if (carrinho.length === 0) {
        alert("O seu carrinho está vazio!");
        return;
    }

    let textoPedido = "Olá, gostaria de fazer o seguinte pedido:\n\n";
    let valorTotal = 0;

    carrinho.forEach(item => {
        textoPedido += `- ${item.nome} (R$ ${item.preco.toFixed(2)})\n`;
        valorTotal += item.preco;
    });

    textoPedido += `\n*Total:* R$ ${valorTotal.toFixed(2)}`;

    // Substitua pelo seu número de WhatsApp (incluindo o código do país, sem espaços)
    const numeroWhatsApp = "5511999999999"; 
    
    // Codifica o texto para o formato URL
    const textoCodificado = encodeURIComponent(textoPedido);
    
    // Cria o link para a API do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    // Abre o WhatsApp numa nova janela
    window.open(linkWhatsApp, '_blank');
}