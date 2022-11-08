import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const ContextGlobalReplace = () => {
	const dados = React.useContext(GlobalContext);
	console.log(dados);
	return <div>{dados.cont + 1}</div>;
};

export default ContextGlobalReplace;
