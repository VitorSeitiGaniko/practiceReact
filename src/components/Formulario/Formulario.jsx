import React from "react";

const Formulario = () => {
	const [formInfos, setFormInfos] = React.useState({
		name: "",
		email: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		console.log("INFOS  --> ", formInfos);
	}

	function handleChange({ target }) {
		const { id, value } = target;
		setFormInfos({ ...formInfos, [id]: value });
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Nome</label>
				{/* <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}
				<input id="name" type="text" value={formInfos.name} onChange={handleChange} />
				<label htmlFor="email">Email</label>
				<input id="email" type="email" value={formInfos.email} onChange={handleChange} />
			</form>
			<button>Enviar</button>
			<h4>{formInfos.name}</h4>
			<h4>{formInfos.email}</h4>
		</div>
	);
};

export default Formulario;
