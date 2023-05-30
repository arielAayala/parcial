import NuevoIngreso from "./Components/nuevoIngreso/nuevoIngreso";
import Table from "./Components/table/table";
import { useState } from "react";
import getAll from "./services/getAll";
import UpdateIngreso from "./Components/updateIngreso/updateIngreso";
import "./app.css";

function App() {
	const [ingreso, setIngreso] = useState([]);

	const handleGet = async () => {
		try {
			const ingresoData = await getAll();
			setIngreso(ingresoData);
		} catch (error) {
			setIngreso([]);
		}
	};

	return (
		<div className="containerIngresos">
			<h1>Laboratorio ingreso</h1>
			<div className="modalIngresos">
				<NuevoIngreso handleGet={handleGet}></NuevoIngreso>
				<UpdateIngreso handleGet={handleGet}></UpdateIngreso>
			</div>
			<Table
				ingreso={ingreso}
				handleGet={handleGet}
			></Table>
		</div>
	);
}

export default App;
