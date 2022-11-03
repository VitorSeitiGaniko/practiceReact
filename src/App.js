import React from "react";
import Header from "./components/Header";
import Produto from "./components/Produto";
import Home from "./components/Home";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

function App() {
	const { pathname } = window.location;

	var Pagina;
	if (pathname === "/produtos") {
		Pagina = Produto;
	} else {
		Pagina = Home;
	}

	return (
		<React.Fragment>
			<Header />
			<Pagina />
		</React.Fragment>
	);
}

export default App;
