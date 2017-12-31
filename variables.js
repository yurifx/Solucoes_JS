console.log('Iniciando o projeto Variáveis');

// o let tem escopo local, já o var tem escopo global

// strings | texts
var texto = "Variável texto";
let texto2 = "Nova variavel";

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
    nome:"John",
    age: 20
}

//
//Arrays | Lists
let list = [];
lista = ["item1", "item2"];

let list2 = ["oi", 2];

//functions | types
let func = function(name, age){
    this.name = name;
    this.age = age;
    console.log('name is: ' + name + ' age is: ' + age);
}
//Test commit mobile 
// calling func variable that is a function
func('calling func', 30);

// array of objects of objectrs
let complex = [
    { model: {
            name: "yuri",
            age: 20
        },
      type: "complex"
    }, 
    {model:
        {
            name: "John",
            age: 30
        },
        type: "complex"
    }
];

console.log('debug finalized');
