import React from "react";
import ProdutoLocalStorageCopy from "./components/ProdutoLocalStorageCopy";

const App7Copy = () => {
	const [productSearch, setProductSearch] = React.useState(null);

	React.useEffect(() => {
		var valueStorage = window.localStorage.getItem("Produto");
		if (valueStorage) {
			setProductSearch(valueStorage);
		}
	}, []);

	// TODA VEZ QUE O productSearch É ALTERADO ELE EXECUTA
	React.useEffect(() => {
		//PRECISA TER ESSE IF POIS SE NÃO TIVER ELE VAI TENTAR PUXAR DO NULL
		if (productSearch) {
			window.localStorage.setItem("Produto", productSearch);
		}
	}, [productSearch]);

	function getProductSearch(event) {
		var { innerText } = event.target;
		setProductSearch(innerText);
	}

	return (
		<div>
			<button onClick={getProductSearch}>notebook</button>
			<button onClick={getProductSearch}>smartphone</button>
			<button onClick={getProductSearch}>tablet</button>
			{productSearch && <ProdutoLocalStorageCopy productSearch={productSearch} />}
		</div>
	);
};

export default App7Copy;
