export default async function getAll() {
	const res = await fetch("http://localhost/parcialBackend/ingreso.php");

	return res.json();
}
