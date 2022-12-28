import React from "react";

const Select = () => {
	const [select, setSelect] = React.useState("");

	return (
		<form action="">
			<select value={select} onChange={({ target }) => setSelect(target.value)} id="products">
				<option value="" disabled>
					Selecione
				</option>
				<option value="notebook">Notebook</option>
				<option value="iphone">Iphone 13</option>
				<option value="ipad">Ipad</option>
			</select>

			<p>{select}</p>
		</form>
	);
};

export default Select;
