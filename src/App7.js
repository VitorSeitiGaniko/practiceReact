import React from "react";
import ProdutoLocalStorage from "./components/ProdutoLocalStorage";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App7 = () => {
	var [dados, setDados] = React.useState(null);

	async function getProduct(event) {
		var { innerText } = event.target;
		localStorage.setItem("Produto", innerText);

		await fetch(`https://ranekapi.origamid.dev/json/api/produto/${innerText}`)
			.then((response) => response.json())
			.then((json) => setDados(json));
	}

	return (
		<div>
			<button onClick={getProduct}>notebook</button>
			<button onClick={getProduct}>smartphone</button>
			<button onClick={getProduct}>tablet</button>
			{dados && <ProdutoLocalStorage dados={dados} />}
		</div>
	);
};

export default App7;
