
# JavaScript

#### Object destructuring

```js
var book = { author: "mister x", name: "hey" };
var bookComplex = {
  details: { title: "stone age", year: 2020, reallyComplex: { key: "foo" } },
};

var books = [book, bookComplex];

/* Simple object descruturing */

var { author, } = book;
console.log("simple obj destructuring", author);

var { author, name } = book;
console.log("simple obj destructuring obtaining 2 props", author, name);

/* simple with renaming */
const { author: x } = book;
console.log("renaming", x);

/* simple with default values */
const { something = "dv1" } = book;
console.log("default values", something);

/* complex object destructuring */

const {
  details: { title },
} = bookComplex;
console.log("2x obj destructuring", title);

const {
  details: {
    reallyComplex: { key },
  },
} = bookComplex;
console.log("3xobj destructuring", key);

/*arg functions */

const myfunc = ({ author }) => {
  console.log("function args destructuring", author);
};
myfunc(book);

/* multiple args */
const myfuncMultipleArgs = ({ details, details: { title } }) => {
  console.log("function multiple args destructuring", details, title);
};
myfuncMultipleArgs;
myfuncMultipleArgs(bookComplex);

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

## Require and Exports
Requiring/Importing:

```javascript
const myfile = require('./test.js')
console.log(myfile)

//note above, the myfile is the module.exports object of './test.js'

```


Exporting:

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

## IMPORT / EXPORT (ES6)

note: this only works with modules enabled (es6)

```javascript

//first way - before the declaration

export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

//second way:

// no export keyword required here
function myfunc() {}
class MyClass {}
export {myfunc, MyClass};

//exporting a default module
let myObj = {};
export {myObj as default}; //or export default let myObj ={}

// importing everything
import * as math from "math";

//importing only what you need fro
import { sum, pi } from "math";

//Renaming
import {sum as soma} from "math";

//importing a default module
import myObj from '/object' //note you don't need the {MyObj}

```