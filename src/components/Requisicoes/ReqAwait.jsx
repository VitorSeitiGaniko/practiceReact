import React from "react";

const ReqAwait = () => {
	async function fetchReq(url) {
		const response = await fetch(url);
		const jsonBody = await response.json();
		return jsonBody;
	}

	const responseFinal = fetchReq("https://ranekapi.origamid.dev/json/api/produto");

	responseFinal.then((response) => {
		console.log(response);
	});

	return (
		<div>
			<button onClick={fetchReq}>Consultar</button>
		</div>
	);
};

export default ReqAwait;
