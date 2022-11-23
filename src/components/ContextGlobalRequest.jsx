import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const ContextGlobalRequest = () => {
	const dados = React.useContext(GlobalContext);
	console.log(dados);
	return (
		<div>
			{dados.productsResponse && (
				<section>
					{dados.productsResponse.map(({nome}) => (
						<li>{nome}</li>
					))}
				</section>
			)}

			<button onClick={dados.clearProductsResponse}>Limpar</button>
		</div>
	);
};

export default ContextGlobalRequest;
