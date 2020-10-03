
# JavaScript
> https://javascript.info/#summary?map

#### Object destructuring

> https://javascript.info/destructuring-assignment#object-destructuring

```javascript
const person = {
  name: 'Yuri',
  age: 31,
  address: {
    street: 'Saint Albans',
    city: 'Auckland',
    flatmate: {
      name: 'HR',
      buy: ['R', 'H'],
      age: 35,
    },
  },
};

var { name } = person; //name = "Yuri"

//renaming a variable
var { name: nome } = person; //name = undefined, nome = "Yuri"

//getting the street (more than one destructuring)

var {
  address: { street },
} = person; //address is undefined and street is Saint Albans

var {
  address: { flatmate },
} = person;

//complex
var {address: {flatmate: {age}}} = person
console.log(age);

//complex renaming
var {address: {flatmate: {age: idade}}} = person
console.log(idade);


// //getting more than one property at time
var {name, address: {city}} = person
console.log(name, city)


//setting default values
var {lastName = "default"} = person
console.log(lastName)

//all together

const {name: rename, address:{flatmate:{age}}, lastName: lsnm="default"} = person

```

Which follows the same approach when you are passing arguments to a function. 

```javascript

const person = {
  name: 'Yuri',
  age: 31,
  address: {
    street: 'Saint Albans',
    city: 'Auckland',
    flatmate: {
      name: 'HR',
      buy: ['R', 'H'],
      age: 35,
    },
  },
};

SimpleLog(person);

function SimpleLog({name}){
    console.log(name);
}


//Follow the same thing we had in the othe example:
//const {name: rename, address:{flatmate:{age}}, lastName: lsnm="default"} = person

function Log({
  name: rename,
  address: {
    flatmate: { age },
  },
  lastName: lsnm = 'default',
}) {
  console.log(rename, age, lsnm); //Yur, 35, default
}

Log(person);



```
## IMMUTABILITY and clonning objects

```javascript

const person = {
    name: "y",
    age: 30,
    address: {
        city: "Auckland"
    }
}


var p1 = Object.assign({}, person, {age: 32});

console.log(person, p1) //same

var p2 = {...person, age: 33};

console.log(person, p2);  //creates a 

//WARN: -> SPREAD OPERATOR PERFORMS A SHALLOW COPY, which means that nested objects
// will be copied the memory reference 

//example:
var p3 = {...person, age: 45}
p3.address.city = 'UPDATED?';
console.log(person);
//as you can see here, the person address changed to UPDATED
//even though we were in the p3 object.

//to prevent that, you would need to copy the nested objects as well, example:

var p4 = {...person, address: {...person.address}}
p4.address.city = 'SP'
console.log(person) //prints Auckland
//this way it doesn't copy the reference but the values itself


```
## Arrays

```js
var arr = [1,2,3];

//adds an item
arr.push(4);

//removes the last item
arr.pop();


//FROM
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


//find
arr = ['a', 'b','c' ];
res = arr.find(x=> x=='c'); //returns c
console.log('find', res)

//findIndex
arr = ['a','b']
console.log('findIndex', arr.findIndex(x=> x=='a'));


// includes => checks if an item exists
arr = [1,2,3]
console.log(arr.includes(1))
console.log(arr.includes(5))

//some
res = arr.some(x=>x=='c') //true
console.log('some', res)

//every
arr = [0,0,0]
arr.every(x=>x==0) //true


// filter -> creates another array (immutable)
arr = [1,2,3];
var myfilter = arr.filter(x=> x > 1);
console.log('filtering', myfilter, arr)

//entries

arr=[1,'a',{}]
var ent = arr.entries()
console.log('ent', ent.next().value);

const a = ['a', 'b', 'c'];

//entries example
for (const [index, element] of a.entries())
  console.log(index, element);

// 0 'a' 
// 1 'b' 
// 2 'c'

// a slice of the array (start, end) - imutable: creates another array
arr = [1,2,3]
var myslice = arr.slice(0,1)
console.log(myslice, arr)

// split an array - mutable: doesn't create another array
arr = [1,2,3]
var mysplice = arr.splice(0,1)
console.log(mysplice, arr) // [1] and [2,3]

// check how many items
arr = [1,2,3]
console.log(arr.length)

// concating two arrays -> imutable: doesn't change the array, but creates another one.
arr = [1,2,3]
arr2 = [4,5,6]
var arr3 = arr.concat(arr2);
console.log(arr, arr3);

// map > convert each item of an array
// imutable: doesn't change the current array but creates another one.
arr = [1,2,3]
var map = arr.map(x=> x+1000)
var map2 = arr.map(x => x == 1 ? 'X': x);
console.log(arr,map, map2);

// another pattern used in seeeverything
arr = ["a", "b", "c"]
otherArray = [1,2,3]

var x = otherArray.map(x=> {arr.push('added')})
console.log(x, otherArray, arr) //they don't create another variable, but instead use the loop to mutate another object

//foreach is algo immutable and doesn't return anything.
arr = [1,2,3];
arr.forEach(x=> x = 9);
console.log('forEach',arr); //still [1,2,3] because it's immutability

arr = [1,2,3];
// var return = arr.forEach(x=> x = 2); this would throw an error

//hack way to mutate
arr.forEach((x) => arr[0] = 'c');
console.log('forEach', arr);

/*reduce

reduce(callbackfn: (previousValue/acumulator: number, currentValue: number, currentIndex: number, array: number[]) => number): number
The return value is the accumulated result, and is provided as an argument in the next call

doesn't execute for the FIRST item, because there's no previous values.
which means that the first to be executed is the second element in the list

*/
arr = ['a', 'b', 'c']
var res = arr.reduce((a, c) => a + c);
console.log('simple reducer', res) //'abc'

//factorial calculation:
arr = [1,2,3,4]

//acc => accumulator
var result = arr.reduce((acc, current, currentIndex, array) => {
    return acc * current
});
console.log('fatorial result', result)


//flat
arr = [0, 1, 2, [3, 4]];
console.log(arr.flat()); //[0, 1, 2, 3, 4]

var arr2 = [0, 1, 2, [[[3, 4]]]];

console.log('flat', arr2.flat()); //[0, 1, 2, [3, 4]]
console.log('flat', arr2.flat(2)); //[0, 1, 2, [3, 4]]
console.log('flat', arr2.flat(3)); //[0, 1, 2, 3, 4]

```


## Array Destructuring

```js

arr = [1,2,3]


```

## Importing, Require, Exports (importing and exporting)



## IMPORT / EXPORT (ES6)

note: this only works with modules enabled (es6)

> There's only around 4 ways to export:
- named export
- default export
- export from 
- export lib as renamed lib


NAMED EXPORTS:


```javascript

//before the object/function/var declaration

export function sum(x, y) {
    return x + y;
}

export var pi = 3.141593;



//in a different line
const fnc = () => {}
class MyClass {}

export {myfunc, MyClass};

-
```

> Importing a named export:
```javascript

//importing only what you need fro
import { sum, pi } from "src/math.js";

//the folder structure in this case should be src/math/index.js
import { sum, pi } from "src/math"; 

//Renaming
import {sum as soma} from "math";


// importing everything
import * as math from "math";

```


**default** module
> you can only have 1 default per file/module

```javascript

const fnc = () => {}
export default fnc


const fnc = () => {}
export {fnc as default}; //or export default let myObj ={}
```

importing a default module
```javascript

import fnc from '/object' //don't need the {}

//renaming
import fnc as f from '/object' //don't need the {}

```


## Agregating modules ES6
> export * from '/...'

sometimes you need to unify (pattern in seeeverything) all exports in one file.. you can do that by using the exports  {module1, module2} from './file.js'

example: world-foods.js

```javascript

// import "sri-lanka" and re-export some of its exports
export {Tea, Cinnamon} from "sri-lanka";

// import "equatorial-guinea" and re-export some of its exports
export {Coffee, Cocoa} from "equatorial-guinea";

// import "singapore" and export ALL of its exports
export * from "singapore";

```

Requiring/Importing:


> BEFORE ES2016

```javascript
const myfile = require('./test.js')
console.log(myfile)

//note above, the myfile is the module.exports object of './test.js'

```

```javascript
const doSomething = () => {
  console.log("from test.js logs");
};


//module.exports is an object that you can either use:
module.exports = {
   func: doSomething
}
// OR
module.exports.myfunc = doSomething
```

The true operator '||'

> returns the first *true* value.

The || basically check if the object exists and if it's true.

```javascript


const notd = undefined; //false - Boolean(undefined)
var obj = {} //if you do a Boolean({}) you will see that this is a true statement

var nmb = 99 //Boolean(nmb) //true



var result = x || 'yep' // returns yep

var result = (condition || 'default') // if condition is true, than returns 




```

Nullish coalescing operator '??'

> returns the first defined value.
```javascript
//The nullcoalescing basically check if the object exists, if not - do what is in after the ??

const x = undefined;
const y = false;
const z = y.something  //also undefined

console.log(x ?? 'logs?'); //logs
console.log(y ?? 'logs?'); //false
console.log(z ?? 'logs?'); //log


//a lot checks
var zzz = x ?? y ?? z ?? 'default'
console.log(zzz); 

//see here, it will return y because it is the first defined value


var doSomething = () => console.log('doing something');

var result = x ?? doSomething();
console.log(result)

```
## HIGH ORDER FUNCTIONS
> functions take take functions as an argument
https://www.youtube.com/watch?v=poQXNp9ItL4&t=1233s

```javascript
function logA(){
  console.log('log')
}

function logB(){
  console.log('log')
}

function doSomething(logFunction){
  logFunction()
}

doSomething(logA)
doSomething(logB)
doSomething(() => console.log('hey'))


```

## CURRYING & PIPE & COMPOSE

> https://www.youtube.com/watch?v=poQXNp9ItL4&t=1688s

```javascript
const { replace } = require('lodash');
// npm i lodash

//Problem: replace(trim(toLower(toString()))

const _ = require('lodash/fp');

const trim = str => str.trim();
const tlower = str =>  str.toLowerCase();
const tstring = str => str.toString();

// imagine that you had these 3 functions and they are not extension methods
// you would have to do this:

var rest2 = trim(tlower(tstring('mystring here')))

//using pipe
var result2 = _.pipe(tstring, trim, tlower)(124);
console.log(result2);


//This works because we are only passing one argument and it is the same for all functions
//now that you want to include a replace  (which takes more than 1 argument, how would you do that?)

// var rpl = (str, toBeReplaced, replaceWith) => str.replace(toBeReplaced, replaceWith)

// var rest3 = _.pipe(tstring, trim, tlower, rpl('a', 'e')) //wont work!

//this doesn't work because pipe is expecting a FUNCTION,
// but instead we are returning a string.

//how do you solve this problem? 

//CONCEPT: Currying (Haskell Curry) -> https://www.youtube.com/watch?v=poQXNp9ItL4&t=1688s
//Currying is a transformation of functions that translates
// function from f(a, b, c) into callable as f(a)(b)(c).


//which is basically, let's say that you want to implement that replace method that takes 3 arguments, string, replace, replaceWith
var rpl = (str) => {
    return function(toBeReplaced){
        return function(replaceWith){
            return str.replace(toBeReplaced, replaceWith);
        }
    }
}
//this could be shortned with anonymous lambda functions:
var replace1= str => replaceWith => toBeReplaced => str.replace(toBeReplaced,replaceWith);

//if you change the order of the parameters, you get the same result;
var replace2 = toBeReplaced => replaceWith => str => str.replace(toBeReplaced, replaceWith);

var mystring = 'abc'
console.log(replace1(mystring)('R1')('a'));
console.log(replace2('a')('R2')(mystring));

//so now you could use the pipe and compose
var usingPipe = _.pipe(trim, tlower, tstring, replace2('a')('pipe'))(mystring) //result: pipebc
console.log(usingPipe);

//compose is basically the same thing but in the other order
var usingCompose= _.compose(replace2('a')('compose'), tstring, tlower, trim)(mystring);
console.log(usingCompose);
```