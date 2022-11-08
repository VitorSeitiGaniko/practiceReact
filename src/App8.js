import React from 'react'

const App8 = () => {
    const [comentarios, setComentarios] = React.useState(['TESTE1']);
    const [input, setInput] = React.useState('');
    const inputElement = React.useRef();
  
    function handleClick() {
      setComentarios([...comentarios, input]);
      setInput('');
      inputElement.current.focus();
    }
  
    return (
      <div>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </div>
    );
}

export default App8



