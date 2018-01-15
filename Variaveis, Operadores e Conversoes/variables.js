console.log('Iniciando o projeto Variáveis');

// o let tem escopo local, já o var tem escopo global

// strings | texts
var texto = "Variável texto";
let texto2 = "Nova variavel";
const does_not_change = "never changes";


// numbers 
// Note − JavaScript does not make a distinction between:
// integer values and floating-point values. 
// All numbers in JavaScript are represented as floating-point values. 
// JavaScript represents numbers using the 64-bit floating-point format defined by the IEEE 754 standard.

var numeroInteiro = 10;
var numeroDecimal = 10.2;

//objects
let obj = {};
obj.nome = 'Yuri';
obj.age = 20;

let obj2 = {
    nome: "John",
    age: 20
}

//
//Arrays | Lists
let list = [];
lista = ["item1", "item2"];

let list2 = ["oi", 2];

//functions | types
let func = function (name, age) {
    this.name = name;
    this.age = age;
    console.log('name is: ' + name + ' age is: ' + age);
}
//Test commit mobile 
// calling func variable that is a function
func('calling func', 30);

// array of objects of objectrs
let complex = [{
        model: {
            name: "yuri",
            age: 20
        },
        type: "complex"
    },
    {
        model: {
            name: "John",
            age: 30
        },
        type: "complex"
    }
];

console.log('debug finalized');


//Diferenças entre var e let.

// 1: Uma variável em escopo global declarada com let não é exportada como global, o var sim.
// exemplo: https://jsfiddle.net/a74pz3v4/

// 2: só pode ser usada na linha seguinte já o var pode ser precedido.

// console.log(varlet); 
// let varlet = "variavel let"; //dá erro

console.log(varvar);
var varvar = "variavel var"; //executa corretamente.

// 3: o let é usado para laços de repetição, onde a variável é finalizada após seu uso.

function TesteLista() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    //console.log(i);  //o i já morreu (uncaught reference error)
}

// Objetos outra forma:

var person = {fname:"John", lname:"Doe", age:25}; 

var carro = {marca:"Fiat", modelo:"Punto", cor:"Preto"}

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

get ou set: carro.marca

objectName.propertyName 
objectName["propertyName"]

for (x in person) {
    text += person[x];
}
