// addEventListener();  -Añadir escuchador de evento

var boton = document.getElementById('boton');

var boton2 = document.getElementById('boton2');

function alerta(){
	alert('Hola mundo');
}

boton.addEventListener('click', alerta);

//removeEventListener(); eliminar escuchador

function removerAlerta(){
	boton.removeEventListener('click', alerta);
}

boton2.addEventListener('click', removerAlerta);


// developer.mozilla.org/en-US/docs/Web/Events
