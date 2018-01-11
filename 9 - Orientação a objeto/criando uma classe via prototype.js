// define a classe Pessoa
function Pessoa() {}

Pessoa.prototype.nome = 'Yuri';

Pessoa.prototype.caminhar = function(){
  alert ('Estou Caminhando!');
};
Pessoa.prototype.dizOi = function(){
  alert ('Oi!');
};
