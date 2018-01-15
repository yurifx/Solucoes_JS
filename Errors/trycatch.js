//Lançando exceções:

throw "Error2";   // tipo string
throw 42;         // tipo numérico
throw true;       // tipo booleano
throw {toString: function() { return "Eu sou um objeto!"; } };


// Usando Try Catch

try { // statements to try
  monthName = getMonthName(myMonth); // função poderia lançar uma exceção
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // passa a exceção para o manipulador de erro -> sua função local.
}