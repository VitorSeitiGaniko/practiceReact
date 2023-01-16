import React from "react";

const ReqAwaitTry = () => {
	async function fetchReq(url) {
		try {
			const response = await fetch(url);
			const jsonBody = await response.json();
			return jsonBody;
		} catch (e) {
			console.error(e);
			console.debug("ta dando erro por conta da url errada");
		} finally {
			console.log("INdependente do q aconteça sempre será executado !");
		}
	}

	const responseFinal = fetchReq("https://ranekapi.origamid.dev/json/api/produtofs");

	responseFinal.then((response) => {
		console.log(response);
	});

	return (
		<div>
			<button onClick={fetchReq}>Consultar</button>
		</div>
	);
};

export default ReqAwaitTry;
