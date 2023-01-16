import React from "react";

const ReqFetch = () => {
	const [arrayProduts, setArrayProducts] = React.useState([]);

	function requestProducts() {
		const promise = fetch("https://ranekapi.origamid.dev/json/api/produto")
			.then((response) => {
				return response.json();
			})
			.then((jsonBody) => {
				setArrayProducts(jsonBody);
				console.log("CONSULTANDO ...", jsonBody);
			});
		console.log("CONSULTANDO final...", promise);
	}

	function requestProducts02() {
		fetch("https://ranekapi.origamid.dev/json/api/produto")
			.then((response) => response.json())
			.then((jsonBody) => {
				setArrayProducts(jsonBody);
			});
	}

	return (
		<div>
			<button onClick={requestProducts02}>Consultar</button>
			<h2 style={{ marginTop: "15px" }}>LISTA DE PRODUTOS</h2>
			{arrayProduts.map((p) => {
				return (
					<div key={p.id}>
						<p>{p.nome}</p>
						<p>{p.preco}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ReqFetch;
