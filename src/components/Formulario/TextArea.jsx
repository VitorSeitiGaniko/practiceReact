import React from "react";

const TextArea = () => {
	const [text, setText] = React.useState("");

	return (
		<form action="">
			<textarea rows="5" value={text} onChange={(e) => setText(e.target.value)} />
			<p>{text}</p>
		</form>
	);
};

export default TextArea;
