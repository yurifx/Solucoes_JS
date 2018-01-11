//criando um array/lista
var lista = [];

lista.push('item 1'); //lista.Add(..)
lista.push('item 2'); //lista.Add(..)

//Filtro em listas (JS)
var listaFiltrada = lista.filter(x => x == "item 1");
console.log(listaFiltrada);


//Utilizando Map e ForEach()
//You should favor .map() and .reduce(), if you prefer the functional paradigm of programming. 
//For other paradigms (and even in some rare cases within the functional paradigm), 
//.forEach() is the proper choice. 
// for () loops should be avoided unless you have determined that there is some necessary benefit 
// they deliver to your end user that no other iteration method is capable of (such as a performance necessity). 
// Keep in mind that while for () loops may appear to be faster in some cases, they will use more memory than the native methods. 
// Also, never forget what Donald Knuth said:

var listaMap = lista.map(x => x + "  concatenação map");
console.log(listaMap);

lista.forEach(function (el, i) {
    lista[i] = el + " concatenação forEach"
    // lista[i] += "concatenação forEach" //2a maneira
});
console.log(lista);


//Procurando um registro e retirando da lista.
var idx = lista.indexOf(item);
lista.splice(idx, 1);



// sorting data
var lista = [5,3,1]
var sortedList = lista.sort();


