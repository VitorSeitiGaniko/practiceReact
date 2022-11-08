import React from "react";

function App6() {
	var [cont, setCont] = React.useState(0);
	React.useEffect(() => {
		console.log("Executa ao renderizar a tela e ao atualizar a tela");
	});

	React.useEffect(() => {
		console.log("Executa apenas ao renderizar a tela, apenas uma vez");
	}, []);

	React.useEffect(() => {
		console.log("Executa toda vez que o cont mudar o valor");
	}, [cont]);

	return (
		<div>
			<button onClick={() => setCont(cont + 1)}>{cont}</button>
		</div>
	);
}

export default App6;
