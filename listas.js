//criando um array/lista
var lista = [];

lista.push('item 1'); //lista.Add(..)
lista.push('item 2'); //lista.Add(..)

//Filtro em listas (JS)
var listaFiltrada = lista.filter(x => x == "item 1");
console.log(listaFiltrada);


//Utilizando Map e ForEach()
var listaMap = lista.map(x => x + "  concatenação map");
console.log(listaMap);

lista.forEach(function (el, i) {
    lista[i] = el + " concatenação forEach"
    // lista[i] += "concatenação forEach" //2a maneira
});
console.log(lista);