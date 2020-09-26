
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

// includes => checks if an item exists
arr = [1,2,3]
console.log(arr.includes(1))
console.log(arr.includes(5))

// filter -> creates another array (imutable)
arr = [1,2,3];
var myfilter = arr.filter(x=> x > 1);
console.log('filtering', myfilter, arr)

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
console.log(x, otherArray, arr) //they don't create another variable, but instead use the loop to mutate anothe object

```
