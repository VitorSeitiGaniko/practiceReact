import React from "react";
import { useState } from "react";

function CheckBoxColorsExer() {
	const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

	const [colors, setColors] = useState([]);

	function checkColors(color) {
		return colors.includes(color);
	}

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

	return (
		<div>
			<form action="">
				{coresArray.map((color) => {
					return (
						<label style={{ textTransform: "capitalize" }}>
							<input type="checkbox" name="" id={color} value={color} checked={checkColors(color)} onChange={handleChange} />
							{color}
						</label>
					);
				})}
			</form>
		</div>
	);
}

export default CheckBoxColorsExer;
