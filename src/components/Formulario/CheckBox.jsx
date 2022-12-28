import React from "react";

const CheckBox = () => {
	const [check, setCheck] = React.useState(false);

	return (
		<form action="">
			<label>
				<input type="checkbox" name="term" value="Termos" checked={check} onChange={({ target }) => setCheck(target.checked)} />
				Li e Aceito os termos
			</label>

			{check === true && <p>Termos Aceitos !!!</p>}
		</form>
	);
};

export default CheckBox;
