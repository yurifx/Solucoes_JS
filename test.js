//IMMUTABILITY and clonning

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