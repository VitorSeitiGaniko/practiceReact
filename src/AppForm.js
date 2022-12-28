import React from "react";
import CheckBox from "./components/Formulario/CheckBox";
import CheckBoxColors from "./components/Formulario/CheckBoxColors";
import CheckBoxColorsExer from "./components/Formulario/CheckBoxColorsExer";
import Formulario from "./components/Formulario/Formulario";
import FormularioPost from "./components/Formulario/FormularioPost";
import Radio from "./components/Formulario/Radio";
import Select from "./components/Formulario/Select";
import TextArea from "./components/Formulario/TextArea";

const AppForm = () => {
	return (
		<div>
			<FormularioPost />
			<TextArea />
			<Select />
			<Radio />
			<CheckBox />
			<CheckBoxColors />
			<CheckBoxColorsExer />
		</div>
	);
};

export default AppForm;
