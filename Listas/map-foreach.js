//map vs forEach();
//foreach manipula os dados reais de um array e o map cria um novo array.

var lista = [1, 2, 3];

var novaLista = lista.forEach(x => x = x * 3);

console.log(lista);
console.log(novaLista);

var lista2 = [1, 2, 3];
var novaLista = lista.map(x => x = x * 3);

console.log(lista);
console.log(novaLista);