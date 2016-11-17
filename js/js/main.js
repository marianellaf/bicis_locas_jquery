function validateForm(){
	/* Escribe tú código aquí ok aqui escribire mi codigo kuak... */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	var lista = document.querySelector("select").value;

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		var span = document.createElement("span");
		var referencia= document.getElementById("name");
		var padre=referencia.parentNode;
		padre.insertBefore(span,referencia);
		var texto = document.createTextNode("Debe ingresar su nombre");
		span.appendChild(texto);
		return span;
	}   else {
		var m = /^[a-zA-Z]*$/;
		if(!nombre.search(m)) {
			console.log("letra")
			m = /[a-z]/g;
		}       
		if(!nombre.search(m)){
			var span = document.createElement("span");
			var referencia= document.getElementById("name");
			var padre=referencia.parentNode;
			padre.insertBefore(span,referencia);
			var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
			span.appendChild(texto);
			return span;
		}
	}
	if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
		var span = document.createElement("span");
		var referencia= document.getElementById("lastname");
		var padre=referencia.parentNode;
		padre.insertBefore(span,referencia);
		var texto = document.createTextNode("Debe ingresar su apellido");
		span.appendChild(texto);
		return span;
	} else {
		var n = /^[a-zA-Z]*$/;
		if(!apellido.search(n)) {
			console.log("letra")
			n = /[a-z]/g;
		}    
		if(!apellido.search(n)){
			var span = document.createElement("span");
			var referencia= document.getElementById("lastname");
			var padre=referencia.parentNode;
			padre.insertBefore(span,referencia);
			var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
			span.appendChild(texto);
			return span;
		}
	}
} 
