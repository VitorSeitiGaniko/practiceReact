import React from "react";
import DesafioRadioForm from "./DesafioRadioForm";

const perguntas = [
	{
		pergunta: "Qual método é utilizado para criar componentes?",
		options: ["React.makeComponent()", "React.createComponent()", "React.createElement()"],
		resposta: "React.createElement()",
		id: "p1",
	},
	{
		pergunta: "Como importamos um componente externo?",
		options: [
			'import Component from "./Component"',
			'require("./Component")',
			'import "./Component"',
		],
		resposta: 'import Component from "./Component"',
		id: "p2",
	},
	{
		pergunta: "Qual hook não é nativo?",
		options: ["useEffect()", "useFetch()", "useCallback()"],
		resposta: "useFetch()",
		id: "p3",
	},
	{
		pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
		options: ["set", "get", "use"],
		resposta: "use",
		id: "p4",
	},
];

const DesafioForm = () => {
	const [anwser, setAnwser] = React.useState({
		p1: "",
		p2: "",
		p3: "",
		p4: "",
	});

	const [slide, setslide] = React.useState(0);
	const [result, setResult] = React.useState(null);

	function handleChange({ target }) {
		setAnwser({ ...anwser, [target.id]: target.value });
	}

	function getQuestions() {
		if (slide < perguntas.length - 1) {
			setslide(slide + 1);
		} else {
			getResult();
		}
	}

	function getResult() {
		var correctAmwsers = perguntas.filter(({ id, resposta }) => anwser[id] === resposta);

		var text = `Voce acertou ${correctAmwsers.length} questões`;
		setResult(text);
	}

	return (
		<form onSubmit={(event) => event.preventDefault()}>
			{perguntas.map((question, index) => {
				return (
					<DesafioRadioForm
						key={question.id}
						{...question}
						onChange={handleChange}
						value={anwser[question.id]}
						active={slide === index}
					/>
				);
			})}
			<button onClick={getQuestions}>Proxima</button>
			{result && <h2>{result}</h2>}
		</form>
	);
};

export default DesafioForm;
