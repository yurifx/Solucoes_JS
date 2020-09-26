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
