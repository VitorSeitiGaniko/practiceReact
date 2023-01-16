import React from "react";
import InputCheckBox from "./InputCheckBox/InputCheckBox";
import InputRadio from "./InputRadio/InputRadio";
import InputSelect from "./InputSelect/InputSelect";
import InputText from "./InputText/InputText";
import InputTextArea from "./InputTextArea/InputTextArea";

const IndexForm = () => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<InputCheckBox />
			<InputRadio />
			<InputSelect />
			<InputText />
			<InputTextArea />
		</form>
	);
};

export default IndexForm;
