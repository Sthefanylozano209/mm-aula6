const catalagoProdutos = [
    {
    nome: "Teclado Mecânico"
    preco: 299.90,
    emEstoque: true
    },
    {nome: "Mouse Gamer"
    preco: 149.50,
    emEstoque: true
    },
    {nome: "Monitor 24 Polegadas"
    preco: 899.90,
    emEstoque: true
    },
];



const brFormater = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "USD"
}
)

console.log("-----Produtos Disponíveis-----");

for(let i=0, i < catalagoProdutos.length;i++){
    if(catalagoProdutos[i].emEstoque) console.log(`Produtos: ${catalagoProdutos[i].nome}, Preço: ${catalagoProdutos[i].preco}`)
}