import React from "react";

const Radio = () => {
	const [radio, setRadio] = React.useState("");
	const [radioColor, setRadioColor] = React.useState("");

	function handleChange({ target }) {
		setRadio(target.value);
	}

	function handleChangeColor({ target }) {
		setRadioColor(target.value);
	}

	return (
		<form action="">
			<h2>Produtos</h2>
			<label>
				<input type="radio" name="productName" value="ipad" onChange={handleChange} />
				Ipad
			</label>
			<label>
				<input type="radio" name="productName" value="iphone" onChange={handleChange} />
				Iphone 13
			</label>
			<p>{radio}</p>
			<h2>Cores</h2>
			<label>
				<input type="radio" name="productName" value="azul" onChange={handleChangeColor} />
				Azul
			</label>
			<label>
				<input type="radio" name="productName" value="magento" onChange={handleChangeColor} />
				Magento
			</label>
			<p>{radioColor}</p>
		</form>
	);
};

export default Radio;
