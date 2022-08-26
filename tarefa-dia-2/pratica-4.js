/*  verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto. */
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};




function calcularImposto (produto) {
   return produto.internacional ? produto.valor * 0.20 + produto.valor : produto.valor * 0.12 + produto.valor
}

console.log(calcularImposto(produtoA));





/*if(produtoA.internacional == true) {
    console.log(produtoA.valor * 0.20 + produtoA.valor)
} else {
    console.log(produtoA.valor * 0.12 + produtoA.valor)
}*/