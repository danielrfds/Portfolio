var produto = "Big Mac";
var quantidadeEstoque = 3;
var preco = 15.00;
var imposto = 8;
var precoTotal = preco + imposto;
var desconto = 0.30;
var precoFinalComDesconto = preco * (1 - desconto);

/*console.log(produto);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);
console.log(precoComDesconto); */ 

console.log("Produto: " + produto + "; Quantidade no estoque: " + quantidadeEstoque + "; Preço bruto: " + preco + "; Impostos: " + imposto + "; Preço bruto total: " + precoTotal + "; Desconto: " + desconto + "; Preço final com desconto aplicado: " + precoFinalComDesconto);