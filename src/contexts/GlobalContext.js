import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
	const [cont, setCont] = React.useState(0);

	return <GlobalContext.Provider value={{ setCont, cont }}>{children}</GlobalContext.Provider>;
	//return <GlobalContext.Provider value={{ nome: "vitor" }}>{children}</GlobalContext.Provider>;
};

export const GlobalContextRequest = ({ children }) => {
	const [productsResponse, setProductsResponse] = React.useState(null);

	React.useEffect(() => {
		fetch("https://ranekapi.origamid.dev/json/api/produto/")
			.then((response) => response.json())
			.then((json) => setProductsResponse(json));
	}, []);

	function clearProductsResponse() {
		setProductsResponse(null);
	}

	return <GlobalContext.Provider value={{ productsResponse, clearProductsResponse }}>{children}</GlobalContext.Provider>;
};
