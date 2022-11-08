import React from "react";
import ProdutoResponse from "./ProdutoResponse";

function ProdutoRequisicao() {
	const [dados, setDados] = React.useState(null);
	const [load, setLoad] = React.useState(null);

	async function handleClick(event) {
		setLoad(false);
		var { innerText } = event.target;

		//PRIMEIRA OPÇÃO PARA RESPONSE
		// const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${innerText}`);
		// const json = await response.json();
		// setDados(json);

		//SEGUNDA OPÇÃO PARA RESPONSE
		await fetch(`https://ranekapi.origamid.dev/json/api/produto/${innerText}`)
			.then((response) => response.json())
			.then((json) => setDados(json));

		setLoad(true);
	}

	return (
		<div>
			<button onClick={handleClick}>notebook</button>
			<button onClick={handleClick}>smartphone</button>
			<button onClick={handleClick}>tablet</button>
			{load === false && <h3>CARREGANDO...</h3>}
			{load === true && <ProdutoResponse dados={dados} />}
		</div>
	);
}

export default ProdutoRequisicao;
