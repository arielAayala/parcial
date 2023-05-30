export default async function insert(
	fecha,
	hora,
	nombreYApellido,
	temperaturaSintoma,
	tosSintoma,
	insuficienciaRespiratoriaSintoma,
	dolorGargantaSintoma,
	perdidaOlfatoSintoma,
	perdidaGustoSintoma,
	otrosSintoma,
	contactoEnAislamiento,
	contactoViajero,
	viajes,
	observacion
) {
	const res = await fetch("http://localhost/parcialBackend/ingreso.php", {
		method: "POST",
		body: JSON.stringify({
			fecha,
			hora,
			nombreYApellido,
			temperaturaSintoma,
			tosSintoma,
			insuficienciaRespiratoriaSintoma,
			dolorGargantaSintoma,
			perdidaOlfatoSintoma,
			perdidaGustoSintoma,
			otrosSintoma,
			contactoEnAislamiento,
			contactoViajero,
			viajes,
			observacion,
		}),
	});
	return res.status;
}
