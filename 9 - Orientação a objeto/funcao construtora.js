//como se fosse uma classe em c# 
//crio a função construtora
var abstrato = function(nome, valor){
    this.nome = nome;
    this.valor = valor;
}



//crio uma instância da minha classe.
var instancia = new abstrato('nome1','valor1');


console.log('Tipo da classe: ' + typeof(abstrato));
console.log('Tipo da instancia: ' + typeof(instancia));

console.log(instancia.nome);



//exemplo2
var Pessoa = function(nome) {
  this.nome = nome;
  console.log('Exemplar de Pessoa criado');
};


//Criando um metodo via prototype.
Pessoa.prototype.dizerOla = function()
{
  alert ('hello');
};


//Criando um metodo via normal
var objetoCompleto = {
    'string':'oi',
    'numero':1,
    'array':[0, 3, 5, 7],
    'objeto': {'prop':'value'},
    'funcao': function(){
        alert('oi');
    }
}
    
















var pessoa1 = new Pessoa('yuri')