//Crio um objeto simples
var obj = {'string':'algum texto',
          'inteiros': 27, 
          'booleanos': true,
          'objeto':{'rua':'rua1', 'numero':'numero1'},
          'arraySimples': [1,2,3,4,5,6],
          'arrayobjetos': [{'nome':'1'}, {'idade':'2'}]
}


//receber propriedades deste objeto.
console.log(obj.nome);

console.log(obj['nome']);


//2a maneira
var yuri = new Object();


//3a maneira
var yuri = {};
yuri.nome = 'yuri';
yuri['idade'] = 27




