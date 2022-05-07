//SCOPE
//El escope es el alcance de una variable, que puede ser locar o global.



// Variable global - Se declara dentro de una función
var mensaje = 'Hola, soy una variable';

function saludar (){
	alert(mensaje);
}
//saludar();



// Variable local - Se declara dentro de una función

function despedirse(){
	var despedida = 'Adios, hasta luego';

	alert(despedida);
}
despedirse();


//------------------------------------------------------------------------

/*
Se puede acceder a una variable desde hacia dentro hacia afuera

Esto permite porteger nuestro codigo, para que desde afuera no lo modifiquen
*/

//------------------------------------------------------------------------


(function(){


	//Escribimos todo el codigo

}())