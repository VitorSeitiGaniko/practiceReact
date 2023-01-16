import React from "react";

const InputTextArea = () => {
	const [show, setShow] = React.useState(false);

	return (
		<div>
			InputTextArea
			<div
				style={{ border: "solid 1px #000" }}
				onMouseEnter={(event) => {
					console.log("ENTROUU");
					event.stopPropagation();
					setShow(true);
				}}
				onMouseLeave={(event) => {
					console.log("SAIUUUUUU");
					event.stopPropagation();
					setShow(false);
				}}
			>
				TESTE DO JUAO
			</div>
			<div style={{ border: "solid 1px #696" }}>{show && <h2>mostrar elemento</h2>}</div>
		</div>
	);
};

export default InputTextArea;
