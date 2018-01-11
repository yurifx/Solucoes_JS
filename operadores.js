/*
Operator	Description
==	        equal to
===	        equal value and equal type
!=	        not equal
!==	        not equal value or not equal type
>	        greater than
<	        less than
>=	        greater than or equal to
<=	        less than or equal to
?	        ternary operator


Operator	Description
&&	        logical and
||	        logical or
!	        logical not


Operator	Description
typeof	    Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type


Operator	Description	            Example	Same as	Result	    Decimal
&	        AND	                    5 & 1	0101 & 0001	0001	 1
|	        OR	                    5 | 1	0101 | 0001	0101	 5
~	        NOT	                    ~ 5	    ~0101	1010	    10
^	        XOR	                    5 ^ 1	0101 ^ 0001	0100	 4
<<	        Zero fill left shift	5 << 1	0101 << 1	1010	 10
>>	        Signed right shift	    5 >> 1	0101 >> 1	0010	  2
>>>	        Zero fill right shift	5 >>> 1	0101 >>> 1	0010	  2
*/

/*

Operator	Description
+	        Adição
-	        Subtração
*	        Multiplicação
/	        Divisão
%	        Módulo
++	        Incremento
--	        Decremento


var x = 5;         
var y = 2;    

Soma:      
var z = x + y;  

Subtração
var z = x - y;  

Multiplicação:
var z = x * y;

*/

/*

Operador condicional (ternário)
O operador condicional é o único operador JavaScript que utiliza três operandos. O operador pode ter um de dois valores baseados em uma condição. A sintaxe é:

condicao ? valor1 : valor2


exemplo:
var status = (idade >= 18) ? "adulto" : "menor de idade";

*/


/*

typeOf  */

var meuLazer = new Function("5 + 2");
var forma = "redondo";
var tamanho = 1;
var hoje = new Date();



typeof meuLazer;  // retorna "function"
typeof forma;     // retorna "string"
typeof tamanho;   // retorna "number"
typeof hoje;      // retorna "object"
typeof naoExiste; // retorna "undefined"

