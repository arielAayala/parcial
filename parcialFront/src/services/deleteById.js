export default async function deleteById(id) {
	const res = await fetch(
		`http://localhost/parcialBackend/ingreso.php?id=${id}`,
		{ method: "DELETE" }
	);

	return res.status;
}
