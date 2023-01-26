import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";
import App8 from "./App8";
import App9 from "./App9";
import App10 from "./App10";
import App7Copy from "./App7Copy";
import AppForm from "./AppForm";
import DesafioForm from "./components/Formulario/DesafioForm";
import ReqFetch from "./components/Requisicoes/ReqFetch";
import ReqAwait from "./components/Requisicoes/ReqAwait";
import ReqPromise from "./components/Requisicoes/ReqPromise";
import ReqAwaitTry from "./components/Requisicoes/ReqAwaitTry";
import IndexForm from "./components/FormularioSeparate/IndexForm";
import IndexStyle from "./components/StyleComponents/IndexStyle";
import IndexModules from "./components/StyleModules/IndexModules";
import AppRouter from "./AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>
);
