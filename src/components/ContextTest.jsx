import React from "react";
import UserContext from "../contexts/UserContext";

const ContextTest = () => {
	const dados = React.useContext(UserContext);
	console.log(dados);
	return <div>{dados.nome}</div>;
};

export default ContextTest;
