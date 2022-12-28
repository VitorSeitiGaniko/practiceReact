import React from "react";

const DesafioRadioForm = ({ pergunta, options, id, onChange, value, active }) => {
	if (!active) return null;
	return (
		<fieldset style={{ marginBottom: "30px" }}>
			<legend>{pergunta}</legend>
			{options.map((op) => {
				return (
					<label key={op}>
						<input
							type="radio"
							name=""
							id={id}
							value={op}
							onChange={onChange}
							checked={value === op}
						/>
						{op}
					</label>
				);
			})}
		</fieldset>
	);
};

export default DesafioRadioForm;
