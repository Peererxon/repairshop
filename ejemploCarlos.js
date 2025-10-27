const miPromesa = new Promise((resolve, reject) => {
	const exito = false; // Simula un resultado de operación
	if (exito) {
		resolve("Operación exitosa");
	} else {
		reject("Error en la operación");
	}
});

miPromesa
	.then((mensaje) => {
		console.log("Éxito:", mensaje); // Se ejecuta si la promesa se resuelve
	})
	.catch((error) => {
		console.error("Error:", error); // Se ejecuta si la promesa se rechaza
	});

console.log("mi console log");

async function fetchConStatus(ErrFunc) {
	try {
		const response = await fetch("http://miendpointCanamima.com", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		console.log("Status del servidor:", response.status); // p. ej. 200, 404, 500

		if (response.ok) {
			// 2xx
			const data = await response.json();
			console.log("Éxito:", data);
		} else if (response.status === 404) {
			console.warn("No encontrado (404)");
		} else if (response.status >= 500) {
			console.error("Error del servidor:", response.status);
		} else {
			console.error("Respuesta inesperada:", response.status);
		}
	} catch (error) {
		ErrFunc(error);
		//console.error("Error de red o CORS:", error);
	}
}

function ErrFunc(err) {
	console.log(err, "Desde mi funcion callback");
	// fetch("http://miregistro.com/logs", {
	// 	method: "POST",
	// 	headers: { "Content-Type": "application/json" },
	// 	body: {
	// 		mensaje: err,
	// 	},
	// });
}

fetchConStatus(ErrFunc)
	.then((respuesta) => {})
	.catch((err) => console.error(err));
