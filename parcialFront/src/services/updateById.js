export default async function updateById(
	id,
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
	const res = await fetch(
		`http://localhost/parcialBackend/ingreso.php?id=${id}`,
		{
			method: "PUT",
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
		}
	);
	return res.status;
}
