var a: number

a = 0 //ok
// a = ""//wrong

//simple types:
//number, string, boolean basically, 


//complex types
class P { 
    k: number
}

var p: P = {k: 0} //ok
var p2: P = {k: ""} //not ok
  
var c: {t:number}

c.t = 0 //ok
// c.t = ""//wrong



console.log(a);






class Person  {
    name: String
}

var p = new Person();
p.name = 'Hey You';

let helloWorld = "Hello World";

var j = {name:"person", age:30}


console.log(p);
console.log(j as Person);



let myAdd: (baseValue: number, increment: number) => number;
myAdd = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };

  console.log(myAdd(2,4));

//  String Literal Types
  
type Easing = "ease-in" | "ease-out" | "ease-in-out";

// var x: Easing = 'eas'// error -> 
var z: Easing = 'ease-in' //can only be one of these 3

// other literals
type A = "" | 0;

var a: A;
a = 0; //ok
// a = 1; //wrong

// Interface using literals
interface Fabrica {
    nome: string | number;
    age: 20 | 30 | 40;
    comp: "this" | "that" | false
}

var f: Fabrica;
// f.nome = true; //wrong
f.nome = 'something'; //ok

//f.age = 45 //wrong
f.age = 30 //ok

// f.comp = "a" //wrong
f.comp = "this" //ok
f.comp = false //ok


// Optionals

interface IFab {
    isdoing: boolean
    testop?: string //optional
}


const fnc = (parm: IFab): boolean => {
    console.log(parm);
    return true;
}
fnc({isdoing: false, testop: 's'});//ok
fnc({isdoing: false});//also ok because testop isoptional 
// fnc({isdoing: false, anotherKey: ""}); //wrong



//two types in a function:


function padLeft(value: string | number): void {
 // ...
}

padLeft(0) //ok
padLeft('') //also ok
// padLeft(true) //wrong
