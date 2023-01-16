import React from "react";

const ReqPromise = () => {
	function ReqPromise() {
		return new Promise((resolve, reject) => {
			fetch("https://ranekapi.origamid.dev/json/api/produto").then((response) => {
				resolve(response);
			});
		});
	}

	ReqPromise()
		.then((response) => {
			return response.json();
		})
		.then((jsonBody) => {
			console.log("CONSULTANDO ...", jsonBody);
		});

	return <button onClick={ReqPromise}>Clicar</button>;
};

export default ReqPromise;
