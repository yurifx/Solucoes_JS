const doSomething = () => {
  console.log("from test.js logs");
};


//module.exports is an object that you can either use:
module.exports = {
   func: doSomething
}
// OR
module.exports.myfunc = doSomething