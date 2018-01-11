Parâmetros rest
A sintaxe de parâmetro rest permite representar um número indefinido de argumentos como um array. No exemplo, usamos parâmetros rest para coletar argumentos do segundo argumento ao último. Então os multiplicamos pelo primeiro argumento. Neste exemplo é usado uma função seta, que será introduzida na próxima seção.

function multiplicar(multiplicador, ...args) {
  return args.map(x => multiplicador * x);
}

var arr = multiplicar(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]




var soma = function(num1, num2, ...args){

var t = 0;

for(var i = 0; i < arguments.length; i++){
	t += arguments[i];
}

console.log(...args.toString());
return num1+num2 + t;
}


