import React from "react";
import ContextTest from "./components/ContextTest";
import UserContext from "./contexts/UserContext";

const App9 = () => {
	return (
		<UserContext.Provider value={{ nome: "vitor" }}>
			<ContextTest />
		</UserContext.Provider>
	);
};

export default App9;
