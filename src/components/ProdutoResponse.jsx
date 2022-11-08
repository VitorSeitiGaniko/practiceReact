import React from "react";

function ProdutoResponse({ dados }) {
	return (
		<div style={{ marginTop: "20px" }}>
			<h2>{dados.nome}</h2>
			<h2>Preço: R${dados.preco}</h2>
			<img src={dados.fotos[0].src} alt="" />
		</div>
	);
}

export default ProdutoResponse;
