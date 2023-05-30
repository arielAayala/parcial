import React, { useState } from "react";
import insert from "../../services/insert";

function NuevoIngreso({ handleGet }) {
	const [input, setInput] = useState({
		fecha: "",
		hora: "",
		nombreYApellido: "",
		temperaturaSintoma: "-",
		tosSintoma: "-",
		insuficienciaRespiratoriaSintoma: "-",
		dolorGargantaSintoma: "-",
		perdidaOlfatoSintoma: "-",
		perdidaGustoSintoma: "-",
		otrosSintoma: "-",
		contactoEnAislamiento: "-",
		contactoViajero: "-",
		viajes: "",
		observacion: "",
	});

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const fetchData = await insert(
				input.fecha,
				input.hora,
				input.nombreYApellido,
				input.temperaturaSintoma,
				input.tosSintoma,
				input.insuficienciaRespiratoriaSintoma,
				input.dolorGargantaSintoma,
				input.perdidaOlfatoSintoma,
				input.perdidaGustoSintoma,
				input.otrosSintoma,
				input.contactoEnAislamiento,
				input.contactoViajero,
				input.viajes,
				input.observacion
			);
			if (fetchData === 200) {
				console.log("cargo");
				handleGet();
				e.target.reset();
			}
		} catch (error) {}
	};

	return (
		<div>
			<button
				type="button"
				class="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#altaModal"
			>
				Alta
			</button>

			<div
				class="modal fade"
				id="altaModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h1
								class="modal-title fs-5"
								id="exampleModalLabel"
							>
								Agregar Ingreso
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<form
								id="formIngreso"
								className="formIngreso"
								onSubmit={handleSubmit}
							>
								<h4>Fecha</h4>
								<input
									type="date"
									required
									name="fecha"
									placeholder="fecha"
									onChange={handleChange}
								></input>
								<h4>Hora</h4>
								<input
									type="time"
									name="hora"
									required
									placeholder="hora"
									onChange={handleChange}
								></input>
								<h4>Nombre y apellido</h4>
								<input
									required
									name="nombreYApellido"
									placeholder="nomre y apellido"
									onChange={handleChange}
								></input>
								<h4>Temperatura</h4>
								<label>si</label>
								<input
									type="radio"
									name="temperaturaSintoma"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="temperaturaSintoma"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>Tos</h4>
								<label>si</label>
								<input
									type="radio"
									name="tosSintoma"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="tosSintoma"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>insuficiencia Respiratoria</h4>
								<label>si</label>
								<input
									type="radio"
									name="insuficienciaRespiratoriaSintoma"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="insuficienciaRespiratoriaSintoma"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>Dolor Garganta</h4>
								<label>si</label>
								<input
									type="radio"
									name="dolorGargantaSintoma"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="dolorGargantaSintoma"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>Perdida Olfato</h4>
								<label>si</label>
								<input
									type="radio"
									name="perdidaOlfatoSintoma"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="perdidaOlfatoSintoma"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>Perdida Gusto</h4>
								<label>si</label>
								<input
									type="radio"
									name="perdidaGustoSintoma"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="perdidaGustoSintoma"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>otros Sintomas</h4>
								<label>si</label>
								<input
									type="radio"
									name="otrosSintoma"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="otrosSintoma"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>Contacto En Aislamiento</h4>
								<label>si</label>
								<input
									type="radio"
									name="contactoEnAislamiento"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="contactoEnAislamiento"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>Contacto Viajero</h4>
								<label>si</label>
								<input
									type="radio"
									name="contactoViajero"
									value={"si"}
									onChange={handleChange}
								></input>
								<label>no</label>
								<input
									type="radio"
									name="contactoViajero"
									value={"-"}
									onChange={handleChange}
								></input>
								<h4>Viajes</h4>
								<textarea
									name="viajes"
									placeholder="viajes"
									onChange={handleChange}
								></textarea>
								<h4>Observacion</h4>
								<textarea
									name="observacion"
									placeholder="observacion"
									onChange={handleChange}
								></textarea>
								<br></br>
								<button>Confirmar</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NuevoIngreso;
