import React from "react";
import Titulo from "./Titulo";

const produtos = [
	{ nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
	{ nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produto = () => {
	return (
		<React.Fragment>
			<Titulo titulo="Produtos" />
			{produtos.map((produto) => (
				<div style={{ border: "1px solid #000", marginBottom: "10px", marginLeft: "10px" }} key={produto.nome}>
					<h3>{produto.nome}</h3>
					<ul>
						{produto.propriedades.map((propriedade) => (
							<li key={propriedade}>{propriedade}</li>
						))}
					</ul>
				</div>
			))}
		</React.Fragment>
	);
};

export default Produto;
