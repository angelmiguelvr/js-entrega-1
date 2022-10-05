document.querySelector('.contenedor__boton').addEventListener('click', function(){
	let cantidad = Number(document.querySelector('#cantidad').value);
	let cantidadFinal;

	if(cantidad > 1){
		cantidadFinal = cantidad + cantidad * 0.05
	}

	if(cantidad >= 100){
		cantidadFinal = cantidad + cantidad * 0.3
	}

	if(cantidad >= 1000){
		cantidadFinal = cantidad + cantidad * 3
	}

	document.querySelector('#interes').innerHTML = `lo que pagaras al con intereses $${cantidadFinal} pesos`;
});