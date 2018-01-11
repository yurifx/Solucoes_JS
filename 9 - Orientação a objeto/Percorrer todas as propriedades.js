﻿//Crio um objeto
var obj = {'nome':'yuri',
          'idade': 27, 
          'endereco':{'rua':'rua1', 'numero':'numero'}
}
​
​
//Percorro cada propriedade do objeto.
for (var prop in obj){
​
console.log(prop + "  :  " + obj[prop]);
​
}