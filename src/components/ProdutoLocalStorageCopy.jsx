import React from "react";

const ProdutoLocalStorageCopy = ({ productSearch }) => {
	const [dados, setDados] = React.useState(null);

	fetch(`https://ranekapi.origamid.dev/json/api/produto/${productSearch}`)
		.then((response) => response.json())
		.then((json) => setDados(json));

	if (!dados) return null;
	return (
		<div style={{ marginTop: "20px" }}>
			<h2>{dados.nome}</h2>
			<h2>Preço: R${dados.preco}</h2>
			<img src={dados.fotos[0].src} alt="" />
		</div>
	);
};

export default ProdutoLocalStorageCopy;
