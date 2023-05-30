import React, { useEffect } from "react";

import deleteById from "../../services/deleteById";
import "./table.css";

function Table({ ingreso, handleGet }) {
	const handleDelete = async (id) => {
		try {
			await deleteById(id);
			handleGet();
		} catch (error) {}
	};

	useEffect(() => {
		handleGet();
		console.log("cargar");
	}, []);

	return (
		<div className="containerTable">
			<table className="table table-dark table-striped">
				<thead>
					<tr>
						<th>id</th>
						<th>fecha</th>
						<th>hora</th>
						<th>nombreYApellido</th>
						<th>temperatura</th>
						<th>tos</th>
						<th>insuficienciaRespiratoria</th>
						<th>dolorGarganta</th>
						<th>perdidaOlfato</th>
						<th>perdidaGusto</th>
						<th>otros</th>
						<th>contactoEnAislamiento</th>
						<th>contactoViajero</th>
						<th>viajes</th>
						<th>observacion</th>
						<th>btnBorrar</th>
					</tr>
				</thead>
				<tbody>
					{ingreso.map((i) => {
						return (
							<tr key={i.id}>
								<th>{i.id}</th>
								<th>{i.fecha}</th>
								<th>{i.hora}</th>
								<th>{i.nombreYApellido}</th>
								<th>{i.temperaturaSintoma}</th>
								<th>{i.tosSintoma}</th>
								<th>{i.insuficienciaRespiratoriaSintoma}</th>
								<th>{i.dolorGargantaSintoma}</th>
								<th>{i.perdidaOlfatoSintoma}</th>
								<th>{i.perdidaGustoSintoma}</th>
								<th>{i.otrosSintoma}</th>
								<th>{i.contactoEnAislamiento}</th>
								<th>{i.contactoViajero}</th>
								<th>{i.viajes}</th>
								<th>{i.observacion}</th>
								<th>
									<button onClick={() => handleDelete(i.id)}>🗑</button>{" "}
								</th>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
