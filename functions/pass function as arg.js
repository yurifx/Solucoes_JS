//passing function as argument is a fundamental thing in javascript
//its called first class functions. 

const f1 = () => {
    console.log('ok from f1')
}

const f2 =  (argfunc) => {
    argfunc();
}


f2(f1);

//ok from f1