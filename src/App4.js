import React from "react";

function App4() {
	const [contar, setContar] = React.useState(1);
	const [items, setItems] = React.useState(["Item 1"]);

	function handleClick() {
		setContar(contar + 1);
	}

	function handleClick02() {
		setContar((contar) => {
			return contar + 1;
		});
	}

	return (
		<div>
			<button onClick={handleClick02}>{contar}</button>
		</div>
	);
}

export default App4;
