import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const ContextGlobalRequest = () => {
	const dados = React.useContext(GlobalContext);
	console.log(dados);
	return (
		<div>
			{dados.productsResponse && (
				<section>
					<p>{dados.productsResponse[0].nome}</p>
					<p>{dados.productsResponse[1].nome}</p>
				</section>
			)}

			<button onClick={dados.clearProductsResponse}>Limpar</button>
		</div>
	);
};

export default ContextGlobalRequest;
