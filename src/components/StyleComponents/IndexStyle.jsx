import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
	font-size: 18px;
	color: blue;
	text-transform: uppercase;
`;

const Descricao = styled.p`
	font-size: 14px;
	color: green;
	background: ${(props) => props.background};
`;

const indexStyle = () => {
	return (
		<div>
			<Titulo>Produto</Titulo>
			<Descricao background="grey">descrição do produto</Descricao>
		</div>
	);
};

export default indexStyle;
