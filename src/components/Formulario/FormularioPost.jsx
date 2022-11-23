import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { StyledLabel } from "./style";

const FormularioPost = () => {
	const [formInfos, setFormInfos] = React.useState({
		nome: "",
		email: "",
		senha: "",
		cep: "",
		rua: "",
		bairro: "",
		cidade: "",
		estado: "",
	});

	const [response, setResponse] = React.useState();

	async function handleSubmit(e) {
		console.log("click");
		e.preventDefault();

		// Essa é a função utilizado para realizar o POST
		await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// form é o objeto com os dados do formulário
			body: JSON.stringify(formInfos),
		}).then((response) => setResponse(response));
	}

	function handleChange({ target }) {
		const { value, id } = target;
		setFormInfos({ ...formInfos, [id]: value });
	}

	// React.useEffect(() => {
	// 	console.log("INFOS  --> ", formInfos);
	// }, [formInfos]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<StyledLabel htmlFor="nome">Nome</StyledLabel>
				<input type="text" id="nome" value={formInfos.nome} onChange={handleChange} />
				<StyledLabel htmlFor="email">Email</StyledLabel>
				<input type="text" id="email" value={formInfos.email} onChange={handleChange} />
				<StyledLabel htmlFor="senha">Senha</StyledLabel>
				<input type="text" id="senha" value={formInfos.senha} onChange={handleChange} />
				<StyledLabel htmlFor="cep">CEP</StyledLabel>
				<input type="text" id="cep" value={formInfos.cep} onChange={handleChange} />
				<StyledLabel htmlFor="rua">Rua</StyledLabel>
				<input type="text" id="rua" value={formInfos.rua} onChange={handleChange} />
				<StyledLabel htmlFor="bairro">Bairro</StyledLabel>
				<input type="text" id="bairro" value={formInfos.bairro} onChange={handleChange} />
				<StyledLabel htmlFor="cidade">Cidade</StyledLabel>
				<input type="text" id="cidade" value={formInfos.cidade} onChange={handleChange} />
				<StyledLabel htmlFor="estado">Estado</StyledLabel>
				<input type="text" id="estado" value={formInfos.estado} onChange={handleChange} />
				<button>Enviar</button>
			</form>

			{response && response.status === 200 && <h1>Usuário Criado com Sucesso !!!</h1>}
		</div>
	);
};

export default FormularioPost;
