The following function will return an array of the parameter names of any function passed in.

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if(result === null)
     result = [];
  return result;
}
Example usage:

getParamNames(getParamNames) // returns ['func']
getParamNames(function (a,b,c,d){}) // returns ['a','b','c','d']
getParamNames(function (a,/*b,c,*/d){}) // returns ['a','d']
getParamNames(function (){}) // returns []
Edit:

With the invent of ES6 this function can be tripped up by default parameters. Here is a quick hack which should work in most cases:

var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
I say most cases because there are some things that will trip it up

function (a=4*(5/3), b) {} // returns ['a']
Edit: I also note vikasde wants the parameter values in an array also. This is already provided in a local variable named arguments.

excerpt from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments:

The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. For example, it does not have the pop method. However it can be converted to a real Array:

var args = Array.prototype.slice.call(arguments);
If Array generics are available, one can use the following instead:

var args = Array.slice(arguments);