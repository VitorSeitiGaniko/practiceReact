import React from "react";

const CheckBoxColors = () => {
	const [colors, setColors] = React.useState(["Magentooo"]);

	function handleChange({ target }) {
		if (target.checked) {
			setColors([...colors, target.value]);
		} else {
			setColors(
				colors.filter((cor) => {
					return cor !== target.value;
				})
			);
		}
	}

	function checkColors(color) {
		return colors.includes(color);
	}

	return (
		<form action="">
			<label>
				<input type="checkbox" name="colors" checked={checkColors("Azul")} value="Azul" onChange={handleChange} />
				Azul
			</label>

			<label>
				<input type="checkbox" name="colors" checked={checkColors("Magentooo")} value="Magentooo" onChange={handleChange} />
				Magento
			</label>
			{/* {check === true && <p>Termos Aceitos !!!</p>} */}
		</form>
	);
};

export default CheckBoxColors;
