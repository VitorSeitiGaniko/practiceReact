import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const ContextGlobal = () => {
	const dados = React.useContext(GlobalContext);
	console.log(dados);

	function handleClick() {
		dados.setCont(dados.cont + 1);
	}

	return (
		<div>
			<p>{dados.nome}</p>
			<button onClick={handleClick}>{dados.cont}</button>
		</div>
	);
};

export default ContextGlobal;
